import React from 'react'
import { Link } from 'react-router-dom';

import Image from "../../images/phone.png";
import Image1 from "../../images/1080-iPhone_11_R_4.png";
import Image2 from "../../images/0063188_-apple-iphone-11-pro-max-_510.jpeg";
import Bimage from "../../images/blackIphone.png";
import Bimage1 from "../../images/blackIphone1.png";
import Bimage2 from "../../images/blackIphone2.png";

const RelatedProduct = () => {
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
    return (
        <div className="flex flex-col w-full items-center">
            <h2 className='text-primary'>Related Product</h2>
            <div className="flex w-full gap-2 mt-6">
                {
                    products.map(product => (
                        <div className="flex w-1/2 border-2 border-black">
                            <div className="w-[40%] h-[8rem] p-2">
                                <img src={product.mainImg} alt="" />
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
                    ))
                }
            </div>
        </div>
    )
}

export default RelatedProduct