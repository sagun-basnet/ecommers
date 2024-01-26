import React, { useState } from 'react'
import { useParams } from 'react-router'
import { MdMessage } from "react-icons/md";

import Image from "../images/phone.png";
import Image1 from "../images/1080-iPhone_11_R_4.png";
import Image2 from "../images/0063188_-apple-iphone-11-pro-max-_510.jpeg";
import Bimage from "../images/blackIphone.png";
import Bimage1 from "../images/blackIphone1.png";
import Bimage2 from "../images/blackIphone2.png";

const SingleProduct = () => {
    const { pid } = useParams();

    const products = [
        {
            pid: 1,
            pname: "iphone",
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
            pname: "iphone",
            price: 40000,
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, corporis quam eveniet veniam delectus consequuntur facere repellendus dolor amet accusantium vero repellat quos officia placeat aliquam, accusamus sunt, voluptate tenetur vel illo? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos repellendus voluptas natus quasi, dignissimos quod laborum quibusdam eius sed quas accusamus repudiandae necessitatibus fugiat laudantium culpa qui esse obcaecati perspiciatis minima excepturi? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos repellendus voluptas natus quasi, dignissimos quod laborum quibusdam eius sed quas accusamus repudiandae necessitatibus fugiat laudantium culpa qui esse obcaecati perspiciatis minima excepturi?",
            type: "iphone",
            mainImg: Bimage,
            img2: Bimage1,
            img3: Bimage2,
            uid: 2,
        },
    ]

    const selectedProduct = products.find((product) => product.pid === parseInt(pid));

    const [mainImg, setMainImg] = useState(selectedProduct.mainImg);

    return (
        <>

            <div className="singleProduct flex h-[100vh] p-4">
                <div className="flex flex-col justify-between w-[50%]  h-full p-6">
                    <div className="h-[80%] w-full flex">
                        <div className="h-full w-[40%] flex flex-col justify-between gap-2">
                            <div className="border-[2.4px] border-black rounded-lg  overflow-hidden  h-1/3 w-[80%] cursor-pointer" onClick={() => setMainImg(selectedProduct.mainImg)}>
                                <img src={selectedProduct.mainImg} alt="" className='rounded-lg' />
                            </div>
                            <div className="border-[2.4px] border-black rounded-lg  overflow-hidden  h-1/3 w-[80%] cursor-pointer" onClick={() => setMainImg(selectedProduct.img2)}>
                                <img src={selectedProduct.img2} alt="" className='rounded-lg' />

                            </div>
                            <div className="border-[2.4px] border-black rounded-lg  overflow-hidden  h-1/3 w-[80%] cursor-pointer" onClick={() => setMainImg(selectedProduct.img3)}>
                                <img src={selectedProduct.img3} alt="" className='rounded-lg' />

                            </div>
                        </div>
                        <div className="h-full w-[55%] flex justify-center items-center">
                            <div className="border-[2.4px] border-black rounded-lg w-full h-[70%]">
                                <img src={mainImg} alt="" className='rounded-lg' />
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
                <div className="flex w-[50%] gap-4 pl-6 px-2 flex-col items-center font-heading" >
                    <h1 className='text-primary'>{selectedProduct.pname}</h1>
                    <p className='text-justify text-lg'>
                        <pre></pre>{selectedProduct.desc}</p>
                    <span className='text-3xl'><span className="text-primary font-bold">Price: </span>{selectedProduct.price}</span>
                    <div className="flex justify-end w-full gap-4 font-bold">
                        <button className='bg-primary p-2 px-4 rounded-lg'>Buy</button>
                        <button className='border-2 border-primary p-2 px-4 rounded-full my-grid'><MdMessage className='text-2xl text-primary' /></button>
                    </div>

                    <div className='h-1 w-full bg-black' />
                    {/* Related Product  */}
                    <div className="flex flex-col w-full items-center">
                        <h2 className='text-primary'>Related Product</h2>
                        <div className="flex w-full gap-2 mt-6">
                            {
                                products.map(product => (
                                    <div className="flex w-1/2 border-2 border-black">
                                        <div className="w-[40%] h-[8rem] p-2">
                                            <img src={product.mainImg} alt="" />
                                        </div>
                                        <div className="flex flex-col p-2 border-2 w-[60%] items-center justify-center gap-1">
                                            <span><span className="text-primary font-bold">Name: </span>{product.pname}</span>
                                            <span><span className="text-primary font-bold">Price: </span>Rs. {product.price}</span>
                                            <div className="flex justify-center w-full">
                                                <button className='bg-primary p-1 rounded-md'>more</button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>

            </div>
        </>


    )
}

export default SingleProduct