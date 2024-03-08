import React, { useEffect, useState } from 'react'
import Mysvg from '../images/svg/thankyou.svg'
import { useNavigate, useParams } from 'react-router'
import axios from 'axios';

const ThankYou = () => {
    const [myData, setMyData] = useState([]);
    const { pid } = useParams();
    const navigate = useNavigate();
    const loadData = async () => {
        try {
            const response1 = await axios.get(`http://localhost:8800/api/getSeller/${pid}`);
            if (response1.status === 200) {
                console.log("Seller details loaded successfully");
                setMyData(response1.data);
            } else {
                console.log("Error loading seller details");
            }

            const userData = JSON.parse(localStorage.getItem('user'));
            if (!userData || !userData.uid) {
                throw new Error("User ID not found in local storage");
            }
            const userId = userData.uid;
            console.log("User ID:", userId);

            const response2 = await axios.put(`http://localhost:8800/api/buy/${pid}`, { userId });
            if (response2.status === 200) {
                console.log("Buy request successful");
            } else {
                console.log("Error sending buy request");
            }
        } catch (error) {
            console.error("Error in loadData:", error);
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    // const sendUser = async () => {
    //     const userId = JSON.parse(localStorage.getItem('user')).uid;
    //     const response = await axios.post(`http://localhost:8800/api/buy/${pid}`, { userId: userId });
    //     if (response.status === 200) {
    //         console.log("vayo hai ");
    //     } else {
    //         console.log("Error aayo..");
    //     }
    // }
    // useEffect(() => {
    //     sendUser();
    // }, []);
    return (
        <div className='font-heading h-[100vh] w-full grid place-items-center'>
            <div className="flex  w-[90%] h-[90%] justify-center items-center">
                <div className="w-1/2 flex justify-center items-center mr-[-2rem]">
                    <img src={Mysvg} alt="" className=' w-full h-full mt-[-4rem]' />
                </div>
                <div className="ml-[-2rem] w-1/2  flex flex-col justify-center items-center">
                    <h1 className='text-5xl text-primary'>You Order has been placed!!!</h1>
                    <span className='text-5xl'>Seller will contact you soon.</span>
                    <div className="flex w-full border-2 mt-6 rounded-lg p-2">
                        <div className="flex  items-center flex-col justify-center w-1/2 gap-1">
                            <div className="p-2 flex flex-col w-full">
                                <span className='text-2xl font-bold'>Seller's Detail: </span>
                                <span className='font-bold text-xl'>
                                    <span className='text-primary'>Name: </span><span>{myData[0]?.name}</span>
                                </span>
                                <span className='font-bold text-xl'>
                                    <span className='text-primary font-bold text-xl'>Email: </span><span>{myData[0]?.email}</span>
                                </span>
                                <span className='font-bold text-xl'>
                                    <span className='text-primary font-bold text-xl'>Contact: </span><span>{myData[0]?.phone}</span>

                                </span>
                                <span className='font-bold text-xl'>
                                    <span className='text-primary font-bold text-xl'>Address: </span><span>{myData[0]?.address}</span>

                                </span>
                            </div>
                        </div>
                        <div className="flex p-2 flex-col w-1/2">
                            <span className='text-2xl font-bold'>Product Detail: </span>
                            <div className="flex gap-1 w-full">
                                <img src={`http://localhost:8800${myData[0]?.mainImg}`} alt="" className='w-1/3 h-24' />
                                <img src={`http://localhost:8800${myData[0]?.img2}`} alt="" className='w-1/3 h-24' />
                                <img src={`http://localhost:8800${myData[0]?.img3}`} alt="" className='w-1/3 h-24' />

                            </div>
                            <span className='font-bold text-xl'>
                                <span className='text-primary'>Name: </span><span>{myData[0]?.pname}</span>
                            </span>
                            <span className='font-bold text-xl'>
                                <span className='text-primary'>Price: </span><span>Rs. {myData[0]?.price}</span>
                            </span>

                        </div>
                    </div>
                    <div className="flex gap-8">
                        <button className='border-2 bg-primary p-2 rounded-md font-bold mt-8 hover:bg-transparent border-primary hover:text-primary my-transition'>Go to dashboard</button>
                        <button className='border-2 bg-primary p-2 rounded-md font-bold mt-8 hover:bg-transparent border-primary hover:text-primary my-transition' onClick={() => navigate('/')}>Home</button>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default ThankYou