import React from 'react'
import './style.css'
import { BiSolidPackage } from "react-icons/bi";
import { FaTag } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <aside className='h-full w-full bg-[#1C2434]'>
            <div className="grid place-items-center">
                <h1 style={{ "font-family": "Rubik Maps" }} className="cursor-pointer mt-[0.8rem] text-[#c8c8c8]">
                    <span style={{ "font-family": "Rubik Maps" }} className="text-primary">A</span>
                    <span style={{ "font-family": "Rubik Maps" }} className="text-black">T</span>Z
                </h1>
            </div>
            <div className="mt-12">
                <Link to="/user/dashboard">
                    <div className=" flex gap-2 items-center p-4 text-white cursor-pointer">
                        <MdDashboard /> Dashboard
                    </div>
                </Link>
                <ul className='my-ul p-4 flex flex-col gap-2 border-t-2 border-b-2'>
                    <Link to="/user/dashboard/my-product">
                        <li> <BiSolidPackage /> My Products</li>
                    </Link>
                    <Link to="/user/dashboard/my-sale">
                        <li> <FaTag /> My Sales</li>

                    </Link>
                    <Link to="/user/dashboard/my-product">
                        <li> <FaShoppingCart /> My Purchase</li>
                    </Link>
                </ul>
            </div>
        </aside>
    )
}

export default Sidebar