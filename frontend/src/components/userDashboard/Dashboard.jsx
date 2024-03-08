import React from 'react'
import { LiaShoppingBagSolid } from "react-icons/lia";
import { CiShoppingTag } from "react-icons/ci";
import { GiShoppingCart } from "react-icons/gi";

const Dashboard = () => {
    return (
        <div className='p-10 flex flex-col'>
            <div className="flex gap-16">
                <div className="w-1/3 h-48 shadow-lg bg-white p-8 flex flex-col justify-center items-center gap-2">
                    <div className="rounded-full w-16 h-16 bg-[#F1F5F9] grid place-items-center text-[2.4rem]">
                        <LiaShoppingBagSolid />
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <span className='text-2xl font-bold text-primary'>23</span>
                        <span>Total Products</span>
                    </div>
                </div>

                <div className="w-1/3 h-48 shadow-lg bg-white p-8 flex flex-col justify-center items-center gap-2">
                    <div className="rounded-full w-16 h-16 bg-[#F1F5F9] grid place-items-center text-[2.4rem]">
                        <CiShoppingTag />
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <span className='text-2xl font-bold text-primary'>23</span>
                        <span>Total Sales</span>
                    </div>
                </div>

                <div className="w-1/3 h-48 shadow-lg bg-white p-8 flex flex-col justify-center items-center gap-2">
                    <div className="rounded-full w-16 h-16 bg-[#F1F5F9] grid place-items-center text-[2.4rem]">
                        <GiShoppingCart />
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <span className='text-2xl font-bold text-primary'>23</span>
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
                            <tr
                                className="border-b transition duration-300 ease-in-out ">
                                <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                                <td className="whitespace-nowrap px-6 py-4">Iphone</td>
                                <td className="whitespace-nowrap px-6 py-4">Mark</td>
                                <td className="whitespace-nowrap px-6 py-4">Otto</td>
                                <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                            </tr>
                            <tr
                                className="border-b transition duration-300 ease-in-out ">
                                <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                                <td className="whitespace-nowrap px-6 py-4">Iphone</td>
                                <td className="whitespace-nowrap px-6 py-4">Mark</td>
                                <td className="whitespace-nowrap px-6 py-4">Otto</td>
                                <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                            </tr>
                            <tr
                                className="border-b transition duration-300 ease-in-out ">
                                <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                                <td className="whitespace-nowrap px-6 py-4">Iphone</td>
                                <td className="whitespace-nowrap px-6 py-4">Mark</td>
                                <td className="whitespace-nowrap px-6 py-4">Otto</td>
                                <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                            </tr>
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