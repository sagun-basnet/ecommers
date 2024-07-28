import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { MdMessage } from "react-icons/md";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoHomeSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import axios from 'axios';

import { AuthContext } from '../context/authContext';

const SingleProduct = () => {
    let { pid } = useParams();
    const navigate = useNavigate();

    const { currentUser } = useContext(AuthContext);

    const [products, setProducts] = useState([]);
    const [imageArr, setImageArr] = useState([]);
    const [myMainImg, setMyMainImg] = useState(null);
    const [currType, setCurrType] = useState('');

    const loadData = async () => {
        const response = await axios.get(`http://localhost:8800/api/post/getPost/${pid}`);
        setProducts(response.data);
    }

    useEffect(() => {
        loadData();
    }, [pid]);

    useEffect(() => {
        if (products.length > 0) {
            const images = splitImagePaths(products[0]?.images);
            setImageArr(images);
            setMyMainImg(images[0]);
            setCurrType(products[0]?.type);
        }
    }, [products]);

    function splitImagePaths(imageString) {
        return imageString ? imageString.split(',') : [];
    }

    const handleMore = (relatedProductId) => {
        navigate(`/product/${relatedProductId}`);
    }

    const [related, setRelated] = useState([]);
    const [imgArr, setImgArr] = useState([]);

    const loadRelatedData = async () => {
        const response = await axios.get("http://localhost:8800/api/post/getAllPost");
        const relatedProducts = response.data;
        setRelated(relatedProducts);

        const imagesArray = relatedProducts.map(product => splitImagePaths(product.images));
        setImgArr(imagesArray);
    }

    useEffect(() => {
        loadRelatedData();
    }, []);

    return (
        <div className="singleProduct flex h-[100vh] p-4">
            <div className="flex flex-col justify-between w-[50%] h-full p-6 relative">
                <div className="absolute bottom-0">
                    <Link to="/">
                        <button className='bg-bgbtn my-flex p-1 rounded-md border-2 border-black font-bold text-base hover:bg-bgbtnHover transition-colors duration-200 ease-in-out'>
                            <IoMdArrowRoundBack />Home
                        </button>
                    </Link>
                </div>

                <div className="h-[80%] w-full flex flex-col justify-center items-center">
                    <div className="h-[80%] w-[70%] flex justify-center items-center">
                        <div className="border-[2.4px] border-black rounded-lg w-full h-[90%]">
                            <img src={`http://localhost:8800${myMainImg}`} alt="" className='rounded-lg' />
                        </div>
                    </div>
                    <div className="h-[20%] w-[70%] flex justify-between gap-8">
                        {
                            imageArr?.map((data, inx) => (
                                <div key={inx} className="border-[2.4px] border-black rounded-lg overflow-hidden h-full w-1/3 cursor-pointer" onClick={() => setMyMainImg(data)}>
                                    <img src={`http://localhost:8800${data}`} alt="" className='rounded-lg' />
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="h-1 w-full bg-black"></div>
                <div className="flex mb-8 px-12 items-start border-2 justify-between font-heading text-lg">
                    <span><span className="text-primary font-bold">Post by:</span> sagun basnet</span>
                    <span><span className="text-primary font-bold">Phone:</span> 9812345678</span>
                    <span><span className="text-primary font-bold">Address:</span> Itahari-19</span>
                </div>
            </div>
            <div className="h-[100%] w-1 bg-black" />
            <div className="singlePro flex w-[50%] gap-4 p-6 flex-col items-center font-heading overflow-y-scroll">
                <h1 className='text-primary'>{products[0]?.pname}</h1>
                <p className='text-justify text-lg p-4'>{products[0]?.description}</p>
                <span className='text-3xl'><span className="text-primary font-bold">Price: </span>Rs. {products[0]?.price}</span>
                <div className="flex justify-end w-full gap-4 font-bold">
                    {
                        currentUser ? (
                            (currentUser.uid !== products[0]?.uid) ?
                                (<Link to={`/product/checkout/${pid}`}>
                                    <button className='bg-primary p-2 px-4 rounded-lg'>Buy</button>
                                </Link>) : (
                                    <span className='flex items-center font-bold text-xl'>This is your product. You can't buy your own product.</span>
                                )
                        ) : (
                            <Link to="/signin">
                                <button className='bg-primary p-2 px-4 rounded-lg'>Buy</button>
                            </Link>
                        )
                    }
                    <button className='border-2 border-primary p-2 px-4 rounded-full my-grid'><MdMessage className='text-2xl text-primary' /></button>
                </div>

                <div className='h-1 w-full bg-black'>&nbsp;</div>

                {/* Related Product  */}
                <div className="flex flex-col w-full items-center">
                    <h2 className='text-primary'>Related Product</h2>
                    <div className="grid grid-cols-2 w-full gap-2 mt-6 relative">
                        {related.length > 1 ? (
                            related.some((product) =>
                                parseInt(pid) !== product.pid &&
                                product.buyer_id === null &&
                                product.type === currType
                            ) ? (
                                related.map((product, index) => (
                                    (parseInt(pid) !== product.pid) &&
                                    (product.buyer_id === null) &&
                                    (product.type === currType) && (
                                        <div className="flex w-full border-2 border-black" key={product.pid}>
                                            <div className="w-[40%] h-[8rem]">
                                                <img src={`http://localhost:8800${imgArr[index][0]}`} alt="" />
                                            </div>
                                            <div className="flex flex-col p-2 border-l-2 w-[60%] items-center justify-center gap-1">
                                                <span className='text-lg text-primary font-extrabold'>{product.pname}</span>
                                                <span><span className="text-primary font-bold">Price: </span>Rs. {product.price}</span>
                                                <div className="flex justify-center w-full">
                                                    <button className='bg-primary p-1 px-2 font-bold rounded-md' onClick={() => handleMore(product.pid)}>more</button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                ))
                            ) : (
                                <h1 className='text-red-600 absolute text-center'>No Related Product found</h1>
                            )
                        ) : (
                            <h1 className='text-red-600 absolute text-center'>No Related Product found</h1>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct;
