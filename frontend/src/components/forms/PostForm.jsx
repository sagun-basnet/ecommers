import React, { useState } from 'react'
import Img from "../../images/form.jpg";
import { IoCloseCircleSharp } from "react-icons/io5";
import { useNavigate } from 'react-router';

const PostForm = () => {
    const navigation = useNavigate();

    const [inputs, setInputs] = useState({

    })

    const handleFile = (e) => {

    }

    return (
        <div className='post w-full h-[100vh] my-grid font-heading'>
            <div className="w-[70%] h-[80%] border-t-2 shadow-2xl flex rounded-md">
                <div className="w-[50%] h-full ">
                    <img src={Img} className='w-full h-full rounded-s-md' alt="" />
                </div>
                <form action="" className='w-[50%] h-full p-4 flex flex-col gap-4 relative'>
                    <IoCloseCircleSharp className='text-red-500 text-4xl absolute right-1 top-1 cursor-pointer hover:text-red-700 my-transition' onClick={() => navigation(-1)} />
                    <h1 className='text-center text-primary'>Post Product</h1>
                    <div className="flex gap-2">
                        <input type="text" name='pname' placeholder='Product Name' />
                        <input type="number" name="price" id="" placeholder='Enter price' />
                    </div>
                    <textarea name="description" rows={5} cols={30} placeholder='Description (write about your phone. i.e. RAM, Storage e.t.c.)' />
                    <div className="flex gap-2">
                        <select name="type" id="" className='text-center '>
                            <option value="iphone" >iphone</option>
                            <option value="macbook" >macbook</option>
                            <option value="watch" >watch</option>
                            <option value="airpod" >airpod</option>
                            <option value="ipad" >ipad</option>
                        </select>
                        <input type="file" name="mainImg" id="" className='flex cursor-pointer' />
                    </div>
                    <div className="flex gap-2">
                        <input type="file" name="img2" id="" className=' cursor-pointer' />
                        <input type="file" name="img3" id="" className=' cursor-pointer' />
                    </div>
                    <div className="flex justify-end">
                        <button type="submit" className='bg-primary p-2 px-4 rounded-md'>Post</button>
                    </div>
                    <span className='mt-10 w-full text-center underline text-primary'>Please fill all the above field to post your product</span>
                </form>
            </div>
        </div>
    )
}

export default PostForm