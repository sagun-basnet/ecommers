import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import Image from "../../images/phone.png";
import Image1 from "../../images/1080-iPhone_11_R_4.png";
import Image2 from "../../images/0063188_-apple-iphone-11-pro-max-_510.jpeg";
import Bimage from "../../images/blackIphone.png";
import Bimage1 from "../../images/blackIphone1.png";
import Bimage2 from "../../images/blackIphone2.png";
import axios from 'axios';
import { RiH1 } from 'react-icons/ri';

const RelatedProduct = ({ pid }) => {
    // console.log(pid);
    const [products, setProducts] = useState([]);
    // console.log(products[0].pid);

    const loadData = async () => {
        const response = await axios.get("http://localhost:8800/api/post/getAllPost");
        setProducts(response.data);
    }

    useEffect(() => {
        loadData();
    }, []);
    return (
        <div className="flex flex-col w-full items-center">
            <h2 className='text-primary'>Related Product</h2>
            <div className="flex w-full gap-2 mt-6">
                {
                    products.length > 1 ? (
                        products.map(product => (
                            (parseInt(pid) !== product.pid) && (
                                <div className="flex w-1/2 border-2 border-black">
                                    <div className="w-[40%] h-[8rem]">
                                        <img src={`http://localhost:8800${product.mainImg}`} alt="" />
                                    </div>
                                    <div className="flex flex-col p-2 border-l-2 w-[60%] items-center justify-center gap-1">
                                        <span className='text-lg text-primary font-extrabold'>{product.pname}</span>
                                        <span><span className="text-primary font-bold">Price: </span>Rs. {product.price}</span>
                                        <div className="flex justify-center w-full">
                                            <Link to={`/product/${product.pid}`}>
                                                <button className='bg-primary p-1 px-2 font-bold rounded-md'>more</button>
                                            </Link>
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
    )
}

export default RelatedProduct