import React, { useContext, useState } from 'react';
import Img from "../../images/form.jpg";
import { IoCloseCircleSharp } from "react-icons/io5";
import { useNavigate } from 'react-router';
import { useFormik } from 'formik';
import axios from 'axios';
import { AuthContext } from "../../context/authContext";

const PostForm = () => {
    const { currentUser } = useContext(AuthContext);
    const navigation = useNavigate();
    const [img, setImg] = useState(null);
    const [fileCount, setFileCount] = useState(0);

    const initialValues = {
        pname: "",
        price: "",
        description: "",
        type: "",
    };
    const userId = currentUser?.uid;

    const { handleSubmit, handleChange, values } = useFormik({
        initialValues,
        onSubmit: async (values, action) => {
            if (fileCount < 3 || fileCount > 5) {
                setError('Please select between 3 to 5 files.');
                setImg([]);
                setFileCount(0);
                e.target.reset();
                return;
            }
            try {
                console.log(values);
                const postData = {
                    ...values,
                    userId: userId
                };
                console.log(postData.userId);

                const formData = new FormData();
                img.forEach((image, index) => {
                    formData.append(`images`, image);
                });
                formData.append("pname", postData.pname);
                formData.append("price", postData.price);
                formData.append("description", postData.description);
                formData.append("type", postData.type);
                formData.append("userId", postData.userId);

                //log formData value
                // formData.forEach((value, key) => {
                //     if (key === 'images') {
                //         console.log(`${key}: ${value.name}`); // Logging file name
                //     } else {
                //         console.log(`${key}: ${value}`);
                //     }
                // });


                const response = await axios.post(
                    "http://localhost:8800/api/createPost",
                    formData,
                    {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    }
                );

                console.log(response);

                if (response.status === 200) {
                    console.log("Post created Successfully !!");
                    console.log(response.data);
                    navigation("/");
                } else {
                    console.log("Post Failed:", response.data);
                }
            } catch (error) {
                console.error("Error During Posting: ", error);
            }
            setImg([]);
            setFileCount(0);
            setError("")
            action.resetForm();
        },
    });

    return (
        <div className='post w-full h-[100vh] my-grid font-heading'>
            <div className="w-[70%] h-[80%] border-t-2 shadow-2xl flex rounded-md">
                <div className="w-[50%] h-full ">
                    <img src={Img} className='w-full h-full rounded-s-md' alt="" />
                </div>
                <form encType="multipart/form-data" onSubmit={handleSubmit} className='w-[50%] h-full p-4 flex flex-col gap-4 relative'>
                    <IoCloseCircleSharp className='text-red-500 text-4xl absolute right-1 top-1 cursor-pointer hover:text-red-700 my-transition' onClick={() => navigation(-1)} />
                    <h1 className='text-center text-primary'>Post Product</h1>
                    <div className="flex gap-2">
                        <input type="text" onChange={handleChange} value={values.pname} name='pname' placeholder='Product Name' />
                        <input type="number" onChange={handleChange} value={values.price} name="price" id="" placeholder='Enter price' />
                    </div>
                    <textarea name="description" onChange={handleChange} value={values.description} rows={5} cols={30} placeholder='Description (write about your phone. i.e. RAM, Storage e.t.c.)' />
                    <div className="flex gap-2">
                        <select name="type" onChange={handleChange} value={values.type} id="" className='text-center '>
                            <option value="" >-- Select  Category --</option>
                            <option value="iphone" >iphone</option>
                            <option value="macbook" >macbook</option>
                            <option value="watch" >watch</option>
                            <option value="airpod" >airpod</option>
                            <option value="ipad" >ipad</option>
                        </select>
                        <input
                            type="file"
                            name="images"
                            id="image"
                            multiple
                            onChange={(e) => {
                                setImg([...e.target.files]);
                                setFileCount(e.target.files.length);
                            }}
                        />
                    </div>
                    <div className="flex justify-end">
                        <button type='submit' className='bg-primary p-2 px-4 rounded-md'>Post</button>
                    </div>
                    <span className='mt-10 w-full text-center underline text-primary'>Please fill all the above field to post your product</span>
                </form>
            </div>
        </div>
    );
};

export default PostForm;
