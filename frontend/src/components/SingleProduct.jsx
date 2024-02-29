import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { MdMessage } from "react-icons/md";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoHomeSharp } from "react-icons/io5";

import Image from "../images/phone.png";
import Image1 from "../images/1080-iPhone_11_R_4.png";
import Image2 from "../images/0063188_-apple-iphone-11-pro-max-_510.jpeg";
import Bimage from "../images/blackIphone.png";
import Bimage1 from "../images/blackIphone1.png";
import Bimage2 from "../images/blackIphone2.png";
import { Link } from 'react-router-dom';
import RelatedProduct from './global/RelatedProduct';
import { AuthContext } from '../context/authContext';
import axios from 'axios';

const SingleProduct = () => {
    let { pid } = useParams();
    const navigate = useNavigate();

    const { currentUser } = useContext(AuthContext);

    const [products, setProducts] = useState([]);
    // console.log(products[0].uid);

    const [myMainImg, setMyMainImg] = useState(null);

    const loadData = async () => {
        const response = await axios.get(`http://localhost:8800/api/post/getPost/${pid}`);
        setProducts(response.data);
    }

    useEffect(() => {
        loadData();
    }, []);

    useEffect(() => {
        setMyMainImg(products[0]?.mainImg);
    }, [products])

    //for related products:
    const [related, setRelated] = useState([]);
    // console.log(products[0].pid);

    const loadRelatedData = async () => {
        const response = await axios.get("http://localhost:8800/api/post/getAllPost");
        setRelated(response.data);
    }

    useEffect(() => {
        loadRelatedData();
    }, []);


    // const handleMore = () => {
    //     navigate(`/product/${pid}`)
    // }

    const handleMore = async (relatedProductId) => {
        const response = await axios.get(`http://localhost:8800/api/post/getPost/${relatedProductId}`);
        setProducts(response.data);
        setMyMainImg(response.data[0]?.mainImg);
        //loadData(); // Reload the current product details
        navigate(`/product/${relatedProductId}`);
    }

    return (
        <>

            <div className="singleProduct flex h-[100vh] p-4">
                <div className="flex flex-col justify-between w-[50%]  h-full p-6 relative">
                    <div className="absolute bottom-0">
                        <Link to="/">
                            <button className='bg-bgbtn my-flex p-1  rounded-md border-2 border-black font-bold text-base hover:bg-bgbtnHover transition-colors duration-200 ease-in-out'><IoMdArrowRoundBack />Home</button></Link>
                    </div>

                    <div className="h-[80%] w-full flex flex-col justify-center items-center">

                        <div className="h-[80%] w-[70%] flex justify-center items-center">
                            <div className="border-[2.4px] border-black rounded-lg w-full h-[90%]">
                                <img src={`http://localhost:8800${myMainImg}`} alt="" className='rounded-lg' />
                            </div>
                        </div>
                        <div className="h-[20%] w-[70%] flex justify-between gap-8">
                            <div className="border-[2.4px] border-black rounded-lg  overflow-hidden  h-full w-1/3 cursor-pointer" onClick={() => setMyMainImg(products[0]?.mainImg)}>
                                <img src={`http://localhost:8800${products[0]?.mainImg}`} alt="" className='rounded-lg' />
                            </div>
                            <div className="border-[2.4px] border-black rounded-lg  overflow-hidden h-full w-1/3 cursor-pointer" onClick={() => setMyMainImg(products[0]?.img2)}>
                                <img src={`http://localhost:8800${products[0]?.img2}`} alt="" className='rounded-lg' />

                            </div>
                            <div className="border-[2.4px] border-black rounded-lg  overflow-hidden h-full w-1/3 cursor-pointer" onClick={() => setMyMainImg(products[0]?.img3)}>
                                <img src={`http://localhost:8800${products[0]?.img3}`} alt="" className='rounded-lg' />

                            </div>
                        </div>
                    </div>
                    <div className="h-1 w-full bg-black"></div>
                    <div className="flex mb-8 px-12 items-start border-2 justify-between font-heading text-lg">
                        <span> <span className="text-primary font-bold">Post by:</span> sagun basnet</span>
                        <span><span className="text-primary font-bold">Phone:</span>  9812345678</span>
                        <span><span className="text-primary font-bold">Address:</span>  Itahari-19</span>
                    </div>
                </div>
                <div className="h-[100%] w-1 bg-black" />
                <div className="singlePro flex w-[50%] gap-4 p-6 flex-col items-center font-heading overflow-y-scroll" >
                    <h1 className='text-primary'>{products[0]?.pname}</h1>
                    <p className='text-justify text-lg p-4'>
                        {products[0]?.description}</p>
                    <span className='text-3xl'><span className="text-primary font-bold">Price: </span>Rs. {products[0]?.price}</span>
                    <div className="flex justify-end w-full gap-4 font-bold">
                        {
                            currentUser ? (
                                (currentUser.uid !== products[0]?.uid) ?
                                    (<Link to={`/product/checkout/${pid}`}>
                                        <button className='bg-primary p-2 px-4 rounded-lg'>Buy</button>
                                    </Link>) : (
                                        <span className=' flex items-center font-bold text-xl'>This is your product. You can't buy your own product.</span>
                                    )
                            ) : (
                                <Link to="/signin">
                                    <button className='bg-primary p-2 px-4 rounded-lg'>Buy</button>
                                </Link>
                            )
                        }
                        <button className='border-2 border-primary p-2 px-4 rounded-full my-grid'><MdMessage className='text-2xl text-primary' /></button>
                    </div>

                    <div className=' h-1 w-full bg-black' >
                        &nbsp;
                    </div>


                    {/* Related Product  */}
                    {/* <RelatedProduct pid={pid} /> */}
                    <div className="flex flex-col w-full items-center">
                        <h2 className='text-primary'>Related Product</h2>
                        <div className="flex w-full gap-2 mt-6">
                            {
                                related.length > 1 ? (
                                    related.map(product => (
                                        (parseInt(pid) !== product.pid) && (
                                            <div className="flex w-1/2 border-2 border-black">
                                                <div className="w-[40%] h-[8rem]">
                                                    <img src={`http://localhost:8800${product.mainImg}`} alt="" />
                                                </div>
                                                <div className="flex flex-col p-2 border-l-2 w-[60%] items-center justify-center gap-1">
                                                    <span className='text-lg text-primary font-extrabold'>{product.pname}</span>
                                                    <span><span className="text-primary font-bold">Price: </span>Rs. {product.price}</span>
                                                    <div className="flex justify-center w-full">
                                                        {/* <Link to={`/product/${product.pid}`}> */}
                                                        <button className='bg-primary p-1 px-2 font-bold rounded-md' onClick={() => {
                                                            handleMore(product.pid);
                                                            // navigate(`/product/${product.pid}`);
                                                        }}
                                                        >more</button>
                                                        {/* </Link> */}
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    ))

                                ) : (
                                    <h1 className='text-red-600'>No Releted Product found</h1>
                                )
                            }
                        </div>
                    </div>

                </div>

            </div>
        </>


    )
}

export default SingleProduct