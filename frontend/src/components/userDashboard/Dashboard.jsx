import React, { useContext, useEffect, useState } from 'react'
import { LiaShoppingBagSolid } from "react-icons/lia";
import { CiShoppingTag } from "react-icons/ci";
import { GiShoppingCart } from "react-icons/gi";
import { AuthContext } from '../../context/authContext';
import axios from 'axios';

const Dashboard = () => {
    const { currentUser } = useContext(AuthContext);
    const user_id = currentUser?.uid;
    const [myData, setMyData] = useState([]);
    const [myPost, setMyPost] = useState([]);
    console.log(myPost);
    const [count, setCount] = useState(0);
    console.log(myData);

    const loadData = async () => {
        try {
            const response = await axios.get(`http://localhost:8800/api/allBuyer/${user_id}`)
            console.log(response);
            setMyData(response.data);
            if (response.status === 200) {
                console.log("data aayo");
            } else {
                console.log("Aayana data");
            }
        } catch (e) {
            console.log("Error while fetching data: ".e);
        }
    }
    const loadMyPost = async () => {
        try {
            const response = await axios.get(`http://localhost:8800/api/post/getPostCountByUser/${user_id}`)
            console.log(response);
            setMyPost(response.data);
            if (response.status === 200) {
                console.log("data aayo");
            } else {
                console.log("Aayana data");
            }
        } catch (e) {
            console.log("Error while fetching data: ".e);
        }
    }

    useEffect(() => {
        loadData();
    }, []);
    useEffect(() => {
        loadMyPost();
    }, []);

    useEffect(() => {
        setCount(myData.length); // Update count when myData changes
    }, [myData]);

    return (
        <div className='p-10 flex flex-col'>
            <div className="flex gap-16">
                <div className="w-1/3 h-48 shadow-lg bg-white p-8 flex flex-col justify-center items-center gap-2">
                    <div className="rounded-full w-16 h-16 bg-[#F1F5F9] grid place-items-center text-[2.4rem]">
                        <LiaShoppingBagSolid />
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <span className='text-2xl font-bold text-primary'>{myPost[0]?.uid_count}</span>
                        <span>Total Products</span>
                    </div>
                </div>

                <div className="w-1/3 h-48 shadow-lg bg-white p-8 flex flex-col justify-center items-center gap-2">
                    <div className="rounded-full w-16 h-16 bg-[#F1F5F9] grid place-items-center text-[2.4rem]">
                        <CiShoppingTag />
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <span className='text-2xl font-bold text-primary'>{count}</span>
                        <span>Total Sales</span>
                    </div>
                </div>

                <div className="w-1/3 h-48 shadow-lg bg-white p-8 flex flex-col justify-center items-center gap-2">
                    <div className="rounded-full w-16 h-16 bg-[#F1F5F9] grid place-items-center text-[2.4rem]">
                        <GiShoppingCart />
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <span className='text-2xl font-bold text-primary'>{myPost[0]?.buyer_id_count}</span>
                        <span>Total Purchase</span>
                    </div>
                </div>


            </div>

            <div className="flex mt-8 gap-6">
                <div className="flex flex-col w-[66%] bg-white p-2 shadow-lg">
                    <h2 className='text-primary'>Buyer's List</h2>
                    <table className="min-w-full text-left text-sm font-light mt-6">
                        <thead className="border-b font-medium dark:border-neutral-500">
                            <tr>
                                <th scope="col" className="px-6 py-4">#</th>
                                <th scope="col" className="px-6 py-4">Product Name</th>
                                <th scope="col" className="px-6 py-4">Buyer's Name</th>
                                <th scope="col" className="px-6 py-4">Email</th>
                                <th scope="col" className="px-6 py-4">Contact</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                myData.map((item, index) => {

                                    return (

                                        <tr key={index}
                                            className="border-b transition duration-300 ease-in-out ">
                                            <td className="whitespace-nowrap px-6 py-4 font-medium">{index + 1}</td>
                                            <td className="whitespace-nowrap px-6 py-4">{item.pname}</td>
                                            <td className="whitespace-nowrap px-6 py-4">{item.name}</td>
                                            <td className="whitespace-nowrap px-6 py-4">{item.email}</td>
                                            <td className="whitespace-nowrap px-6 py-4">{item.phone}</td>
                                        </tr>

                                    )

                                })

                            }
                        </tbody>
                    </table>
                </div>
                <div className="flex flex-col w-[34%] bg-white p-2 shadow-lg">
                    <h2 className='text-primary'>Recent Transaction</h2>
                    <div className="flex flex-col mt-4 gap-2">
                        <div className="flex justify-between items-center bg-[#F1F5F9] p-2">
                            <div className="flex flex-col">
                                <span className='text-primary'>09823</span>
                                <span>User Name</span>
                            </div>
                            <div className="">
                                2022-02-28
                            </div>
                            <div className="p-2 grid place-items-center bg-primary text-white font-bold rounded-lg">
                                Rs.20000
                            </div>
                        </div>
                        <div className="flex justify-between items-center bg-[#F1F5F9] p-2">
                            <div className="flex flex-col">
                                <span className='text-primary'>09823</span>
                                <span>User Name</span>
                            </div>
                            <div className="">
                                2022-02-28
                            </div>
                            <div className="p-2 grid place-items-center bg-primary text-white font-bold rounded-lg">
                                Rs.20000
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Dashboard