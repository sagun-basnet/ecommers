import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import "../global/global.css";
import { FaRegTrashAlt } from "react-icons/fa";

// import { useEffect } from "react";
import { AuthContext } from '../../context/authContext';
import { Link, useNavigate } from 'react-router-dom';
import Modal from '../global/Modal';
import { FaRegUserCircle } from "react-icons/fa";

const Product = () => {
    const navigate = useNavigate();
    useEffect(() => {
        AOS.init({ duration: 1500 });
    }, []);
    const { currentUser } = useContext(AuthContext);
    const user_id = currentUser?.uid;
    const [activeSection, setActiveSection] = useState('myProducts');
    const [myData, setMyData] = useState([]);
    const [myBuyer, setMyBuyer] = useState([]);
    const [myData1, setMyData1] = useState([]);
    const [open, setOpen] = useState(false);
    const [openBuyer, setOpenBuyer] = useState(false);
    const [img, setImg] = useState([])
    // console.log(myBuyer);
    // console.log(myData);
    function splitImagePaths(imageString) {
        // Check if imageString is not null before splitting
        return imageString ? imageString.split(',') : [];
    }

    const loadMyData = async () => {
        try {
            const response = await axios.get(`http://localhost:8800/api/post/getPostByUser/${user_id}`);
            console.log(response);
            setMyData(response.data);
            setImg(response.data.images);
        } catch (e) {
            console.log("Error aayo:", e);
        }
    }
    console.log(myData);


    useEffect(() => {
        loadMyData();
    }, []);


    const loadMyData1 = async () => {
        try {
            const response = await axios.get(`http://localhost:8800/api/getOrderByUser/${user_id}`);
            console.log(response);
            setMyData1(response.data);

        } catch (e) {
            console.log("Error aayo:", e);
        }
    }

    useEffect(() => {
        loadMyData1();
    }, []);

    const handleViewBuyer = async (pro_id) => {
        // console.log(pro_id);
        const response = await axios.get(`http://localhost:8800/api/getBuyerByProductId/${pro_id}`);
        console.log(response.data);
        setMyBuyer(response.data);

        if (response.status === 200) {
            console.log("Success");
        } else {
            console.log("aayana");
        }
    }

    const handleClick = (section) => {
        setActiveSection(section);
    }

    return (
        <div className='flex flex-col p-8'>
            <div className="flex justify-between">
                <h1 className=''>Your Products:</h1>
                <Link to="/post">
                    <button className='bg-primary px-2 h-10 rounded-md hover:bg-green-600 my-transition font-bold shadow-md' >Add Post</button>

                </Link>
            </div>
            <div className="flex gap-4  px-6 ">
                <span className={`cursor-pointer p-2 ${activeSection === 'myProducts' ? 'bg-white' : ''}`} onClick={() => handleClick('myProducts')}>My products</span>
                <span className={`cursor-pointer p-2 ${activeSection === 'buyerRequest' ? 'bg-white' : ''}`} onClick={() => handleClick('buyerRequest')}>Buyer's request</span>
            </div>




            {/* for all listed product */}
            <div className={`bg-white grid grid-cols-3 gap-2 p-4 overflow-y-scroll no-scrollbar ${activeSection === 'myProducts' ? 'grid' : 'hidden'}`}>
                {
                    myData.map((item) => {
                        return (
                            !item.buyer_id &&
                            <div
                                className="productMainDiv rounded-[0.6rem] h-[26rem] w-full px-[3%] my-border  flex flex-col gap-[0.6rem] bg-[#F1F5F9]"
                                data-aos="fade-up"
                            >
                                <div className="productMainImg h-1/2 w-full mt-2">
                                    <img className="h-full w-full" src={`http://localhost:8800${splitImagePaths(item.images)[0]}`} alt="" />
                                </div>
                                <div className="text-center mt-[-0.5rem]">
                                    <p className="text-[1.2rem] font-bold font-heading">Name: {item.pname}</p>
                                    <p className="text-primary font-bold font-heading">Rs: {item.price}</p>
                                </div>
                                <div className="productImgs h-[20%] flex gap-[0.6rem] ">
                                    <div className="img1 pimg">
                                        <img src={`http://localhost:8800${splitImagePaths(item.images)[0]}`} alt="" />
                                    </div>
                                    <div className="img2 pimg">
                                        <img src={`http://localhost:8800${splitImagePaths(item.images)[1]}`} alt="" />
                                    </div>
                                    <div className="img3 pimg">
                                        <img src={`http://localhost:8800${splitImagePaths(item.images)[2]}`} alt="" />
                                    </div>
                                </div>
                                <div className="flex justify-center gap-2 ">
                                    <button onClick={() => navigate(`/product/${item.pid}`)} className='px-4 py-1 rounded-md bg-blue-500 hover:bg-blue-600 my-transition'>View</button>




                                    <button className='px-4 py-1 rounded-md bg-red-500 hover:bg-red-600 my-transition' onClick={() => setOpen(true)}>Delete</button>



                                </div>
                            </div>
                        )
                    })
                }
            </div>


            {/* for buyers request */}

            <div className={`bg-white grid grid-cols-3 gap-2 p-4 overflow-y-scroll no-scrollbar ${activeSection === 'buyerRequest' ? 'grid' : 'hidden'}`}>
                {
                    myData1.map((item) => {
                        return (
                            <div
                                className="productMainDiv rounded-[0.6rem] h-[26rem] w-full px-[3%] my-border  flex flex-col gap-[0.6rem] bg-[#F1F5F9]"
                                data-aos="fade-up"
                            >
                                <div className="productMainImg h-1/2 w-full mt-2">
                                    <img className="h-full w-full" src={`http://localhost:8800${splitImagePaths(item.images)[0]}`} alt="" />
                                </div>
                                <div className="text-center mt-[-0.5rem]">
                                    <p className="text-[1.2rem] font-bold font-heading">Name: {item.pname}</p>
                                    <p className="text-primary font-bold font-heading">Rs: {item.price}</p>
                                </div>
                                <div className="productImgs h-[20%] flex gap-[0.6rem] ">
                                    <div className="img1 pimg">
                                        <img src={`http://localhost:8800${splitImagePaths(item.images)[0]}`} alt="" />
                                    </div>
                                    <div className="img2 pimg">
                                        <img src={`http://localhost:8800${splitImagePaths(item.images)[1]}`} alt="" />
                                    </div>
                                    <div className="img3 pimg">
                                        <img src={`http://localhost:8800${splitImagePaths(item.images)[2]}`} alt="" />
                                    </div>
                                </div>
                                <div className="flex justify-center gap-2 ">
                                    <div className="grid place-items-center px-2 bg-primary rounded-md">
                                        Delivery status: {item.status}
                                    </div>
                                    <button className='px-4 py-1 rounded-md bg-blue-500 hover:bg-blue-600 my-transition' onClick={() => {
                                        setOpenBuyer(true);
                                        handleViewBuyer(item.pid);
                                    }}>View buyer</button>

                                </div>
                            </div>
                        )
                    })
                }
            </div>


            {/* for sold out  */}


            {/* for delete Modal */}
            <Modal open={open} onClose={() => setOpen(false)}>
                <h1>Are You Sure?</h1>
                <div className="rounded-full w-36 h-36 bg-[#F1F5F9] grid place-items-center">
                    <FaRegTrashAlt className='text-8xl text-red-600' />

                </div>
                <div className="flex gap-4">
                    <button className='px-2 py-1 bg-red-600 hover:bg-red-500 my-transition rounded-md text-white'>Delete</button>
                    <button className='border-2 border-black px-2 py-1 bg-black hover:bg-transparent my-transition rounded-md text-white hover:text-black' onClick={() => setOpen(false)}>Cancel</button>
                </div>
            </Modal>
            {/* for view buyer Modal */}
            <Modal open={openBuyer} onClose={() => setOpenBuyer(false)}>
                <h1>Buyer's Details</h1>
                <div className="rounded-full w-36 h-36 bg-[#F1F5F9] grid place-items-center">
                    <FaRegUserCircle className='text-8xl text-gray-700' />
                </div>
                <div className="flex flex-col gap-1">
                    <div className="flex gap-2 justify-between w-[12rem] text-xl ">
                        <span className='font-bold'>Name: </span> <span className='text-primary font-bold flex justify-start w-full'>{myBuyer[0]?.name}</span>
                    </div>
                    <div className="flex gap-2 justify-between w-[10rem] text-xl">
                        <span className='font-bold'>Address: </span> <span className='text-primary font-bold flex justify-start w-1/2'>{myBuyer[0]?.address}</span>
                    </div>
                    <div className="flex gap-2 justify-between w-[10rem] text-xl">
                        <span className='font-bold'>Phone: </span> <span className='text-primary font-bold flex justify-start w-1/2'>{myBuyer[0]?.phone}</span>
                    </div>
                    <div className="flex gap-2 justify-between w-[10rem] text-xl">
                        <span className='font-bold'>Payment: </span> <span className='text-primary font-bold flex justify-start w-1/2'> Paid</span>
                    </div>
                </div>
                <div className="flex gap-4">
                    <button className='px-2 py-1 bg-primary hover:bg-green-500 my-transition rounded-md '>Delivered</button>
                    <button className='border-2 border-black px-2 py-1 bg-black hover:bg-transparent my-transition rounded-md text-white hover:text-black' onClick={() => setOpenBuyer(false)}>Cancel</button>
                </div>
            </Modal>
        </div>
    )
}

export default Product