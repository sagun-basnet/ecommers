import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router';

import Image from "../images/phone.png";
import Image1 from "../images/1080-iPhone_11_R_4.png";
import Image2 from "../images/0063188_-apple-iphone-11-pro-max-_510.jpeg";
import Bimage from "../images/blackIphone.png";
import Bimage1 from "../images/blackIphone1.png";
import Bimage2 from "../images/blackIphone2.png";
import { AuthContext } from '../context/authContext';

import { IoMdArrowRoundBack } from "react-icons/io";

const Checkout = () => {
    const { pid } = useParams();
    const { currentUser } = useContext(AuthContext);

    const products = [
        {
            pid: 1,
            pname: "Iphone 13 pro max",
            price: 45000,
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, corporis quam eveniet veniam delectus consequuntur facere repellendus dolor amet accusantium vero repellat quos officia placeat aliquam, accusamus sunt, voluptate tenetur vel illo? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos repellendus voluptas natus quasi, dignissimos quod laborum quibusdam eius sed quas accusamus repudiandae necessitatibus fugiat laudantium culpa qui esse obcaecati perspiciatis minima excepturi? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos repellendus voluptas natus quasi, dignissimos quod laborum quibusdam eius sed quas accusamus repudiandae necessitatibus fugiat laudantium culpa qui esse obcaecati perspiciatis minima excepturi?",
            type: "iphone",
            mainImg: Image,
            img2: Image1,
            img3: Image2,
            uid: 6,
        },
        {
            pid: 2,
            pname: "Iphone 13 128/4",
            price: 40000,
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, corporis quam eveniet veniam delectus consequuntur facere repellendus dolor amet accusantium vero repellat quos officia placeat aliquam, accusamus sunt, voluptate tenetur vel illo? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos repellendus voluptas natus quasi, dignissimos quod laborum quibusdam eius sed quas accusamus repudiandae necessitatibus fugiat laudantium culpa qui esse obcaecati perspiciatis minima excepturi? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos repellendus voluptas natus quasi, dignissimos quod laborum quibusdam eius sed quas accusamus repudiandae necessitatibus fugiat laudantium culpa qui esse obcaecati perspiciatis minima excepturi?",
            type: "iphone",
            mainImg: Bimage,
            img2: Bimage1,
            img3: Bimage2,
            uid: 2,
        },
    ]

    const navigation = useNavigate();

    const selectedProduct = products.find((product) => product.pid === parseInt(pid));
    return (
        <div className='w-full h-[100vh] my-flex font-heading'>
            <div className="flex w-[70%] h-[80%] relative rounded-xl shadow-2xl border-t-2 border-r-2 border-l-2 p-6">
                <button className='absolute top-2 left-2' onClick={() => navigation(-1)}>
                    <IoMdArrowRoundBack className='text-2xl' />
                </button>
                <div className="detail w-1/2 h-full p-8 flex flex-col gap-2">
                    <div className="userName flex items-center gap-2">
                        <div className="rounded-full w-10 h-10 my-grid text-xl font-bold bg-primary font-heading">{currentUser.name.charAt(0).toUpperCase()}
                        </div>
                        <span className='capitalize font-semibold'>{currentUser.name}</span>
                    </div>
                    <div className="">
                        <h2>Rs. {selectedProduct.price}</h2>
                    </div>
                    <div className="product flex border-2 p-2">
                        <div className="img h-[5rem]">
                            <img className='h-full w-full' src={selectedProduct.mainImg} alt="" />
                        </div>
                        <div className="detail flex justify-between w-[80%] p-2">
                            <div className="flex flex-col">
                                <span className='font-bold text-lg'>{selectedProduct.pname}</span>
                                <span>Qty 1</span>
                            </div>
                            <span className='font-bold text-lg'>Rs. {selectedProduct.price}</span>
                        </div>
                    </div>
                    <div className=" flex items-end flex-col">
                        <span className=' w-[70%] flex justify-between'>
                            <span>Subtotal</span>
                            <span>Rs. {selectedProduct.price}</span>
                        </span>
                    </div>
                    <div className=" flex items-end flex-col">
                        <span className=' w-[70%] flex justify-between'>
                            <span>Extra Charge</span>
                            <span></span>
                        </span>
                    </div>
                    <div className=" flex items-end flex-col">
                        <span className=' w-[70%] flex justify-between'>
                            <span>Total Due</span>
                            <span>Rs. {selectedProduct.price}</span>
                        </span>
                    </div>
                </div>
                <div className='h-full border-2' />
                <div className="payment w-1/2 h-full flex flex-col  items-center relative p-8 gap-2">
                    <button onClick={() => navigation(-1)} className='rounded-md p-2 px-6 bg-[#FF0000] hover:bg-red-600 my-transition font-bold absolute bottom-0 right-6 text-white'>Cancle</button>

                    <h1 className='mb-16'>Payment Option</h1>
                    <div className="esewa w-full my-grid">
                        <button className=' border-2 p-2 px-4 w-[60%] rounded-md bg-[#67BD4C]'>pay via esewa</button>
                    </div>
                    <div className="w-full h-0 border-2"></div>
                    <div className="khalti w-full my-grid">
                        <button className='border-2 p-2 px-4 w-[60%] rounded-md bg-[#613494] text-white'>pay via khelti</button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout