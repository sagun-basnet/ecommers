import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/authContext';
import { Link, useNavigate } from 'react-router-dom';

const Sale = () => {
    const navigate = useNavigate();
    const { currentUser } = useContext(AuthContext);
    const user_id = currentUser?.uid;
    const [activeSection, setActiveSection] = useState('soldOut');
    const [total, setTotal] = useState(0);
    const [myData1, setMyData1] = useState([]);
    // console.log(myData1.length !== 0);

    function splitImagePaths(imageString) {
        // Check if imageString is not null before splitting
        return imageString ? imageString.split(',') : [];
    }

    const loadMyData1 = async () => {
        try {
            const response = await axios.get(`http://localhost:8800/api/getOrderByUser/${user_id}`);
            console.log(response.data);
            setMyData1(response.data);

            // Calculate total price
            const totalPrice = response.data.reduce((acc, item) => {
                // Check if the item status is not "pending"
                if (item.status === "pending") {
                    // If not pending, add its price to the accumulator
                    return acc + parseInt(item.price);
                } else {
                    // If pending, return the accumulator unchanged
                    return acc;
                }
            }, 0);
            setTotal(totalPrice);


        } catch (e) {
            console.log("Error aayo:", e);
        }
    }

    useEffect(() => {
        loadMyData1();
    }, []);


    const handleClick = (section) => {
        setActiveSection(section);
    }

    function formatNumberCustom(number) {
        // Convert the number to a string and reverse it for easier manipulation
        let numStr = number.toString().split('').reverse().join('');
        
        // Group the reversed string into the first 3 digits and the rest in pairs of 2
        let firstPart = numStr.slice(0, 3);  // First 3 digits
        let restPart = numStr.slice(3);      // Rest of the digits
        
        // Group the rest digits in pairs of 2
        let groupedRest = restPart.match(/.{1,2}/g) || [];
        
        // Combine the first part and grouped rest with commas
        let formattedNumber = firstPart + (groupedRest.length ? ',' + groupedRest.join(',') : '');
        
        // Reverse the string back to its correct form and return it
        return formattedNumber.split('').reverse().join('');
    }
    return (
        <div className="flex flex-col p-8 pb-0">
            <div className="flex justify-between ">
                <h1 className=''>Your Sales:</h1>
                <Link to="/post">
                    <button className='bg-primary px-2 h-10 rounded-md hover:bg-green-600 my-transition font-bold shadow-md' >Add Post</button>

                </Link>
            </div>
            <div className="flex gap-4  px-6 ">
                <span className={`cursor-pointer p-2 ${activeSection === 'soldOut' ? 'bg-white' : ''}`} onClick={() => handleClick('soldOut')}>Solded Product</span>
                <span className={`cursor-pointer p-2 ${activeSection === 'table' ? 'bg-white' : ''}`} onClick={() => handleClick('table')}>Table</span>
            </div>


            {/* for solded Product  */}
            <div className={`bg-white grid grid-cols-3 gap-2 p-4 overflow-y-scroll h-[30rem] no-scrollbar ${activeSection === 'soldOut' ? 'grid' : 'hidden'}`}>
                {
                    myData1.length === 0 ? (
                        <h1 className="h-32 text-center col-span-4 text-primary">No products found</h1>
                    ) : (
                        myData1.map((item) => (
                            // {
                            //     item.
                            // }
                            <div
                                key={item.id} // add key for React rendering
                                className="productMainDiv rounded-[0.6rem] h-[26rem] w-full px-[3%] my-border  flex flex-col gap-[0.6rem] bg-[#F1F5F9]"
                                data-aos="fade-up"
                            >
                                <div className="productMainImg h-1/2 w-full mt-2">
                                    <img className="h-full w-full" src={`http://localhost:8800${splitImagePaths(item.images)[0]}`} alt="" />
                                </div>
                                <div className="text-center mt-[-0.5rem]">
                                    <p className="text-[1.2rem] font-bold font-heading">Name: {item.pname}</p>
                                    <p className="text-primary font-bold font-heading">Rs: {formatNumberCustom(item.price)}</p>
                                </div>
                                <div className="productImgs h-[20%] flex gap-[0.6rem] ">
                                    <div className="img1 pimg">
                                        <img src={`http://localhost:8800${splitImagePaths(item.images)[0]}`} alt="" />
                                    </div>
                                    <div className="img2 pimg">
                                        <img src={`http://localhost:8800${splitImagePaths(item.images)[1]}`} alt="" />
                                    </div>
                                    <div className="img3 pimg">
                                        <img src={`http://localhost:8800${splitImagePaths(item.images)[2]}`} alt="" />
                                    </div>
                                </div>
                                <div className="flex justify-center gap-2 ">
                                    <div className="grid place-items-center p-2 bg-primary rounded-md">
                                        {item.status}
                                    </div>
                                    <button onClick={() => navigate(`/product/${item.pid}`)} className='px-4 py-1 rounded-md bg-blue-500 hover:bg-blue-600 my-transition'>View</button>
                                </div>
                            </div>
                        ))
                    )
                }
            </div>

            {/* for table  */}
            <div className={` bg-white p-4 ${activeSection === 'table' ? 'block' : 'hidden'}`}>

                <div
                    className="w-full h-[25rem] overflow-y-scroll"
                >
                    <table className=" min-w-full text-left text-sm font-light">
                        <thead className="border-b font-medium dark:border-neutral-500">
                            <tr className='border-2 '>
                                <th scope="col" className="px-6 py-4">#</th>
                                <th scope="col" className="px-6 py-4">Product Name</th>
                                <th scope="col" className="px-6 py-4">Price</th>
                                <th scope="col" className="px-6 py-4 grid place-items-center">Images</th>
                                <th scope="col" className="px-6 py-4">Buyer's Name</th>
                                <th scope="col" className="px-6 py-4">Buyer's Phone</th>
                            </tr>
                        </thead>
                        <tbody className=' overflow-y-scroll'>
                            {
                                myData1.map((item, index) => {

                                    return (
                                        item.status === "pending" ?
                                            <tr
                                                className="border-b transition duration-300 ease-in-out">
                                                <td className="whitespace-nowrap px-6 py-4 font-medium">{index + 1}</td>
                                                <td className="whitespace-nowrap px-6 py-4">{item.pname}</td>
                                                <td className="whitespace-nowrap px-6 py-4">{formatNumberCustom(item.price)}</td>
                                                <td className="whitespace-nowrap px-6 py-4 flex gap-[1rem] justify-center">
                                                    <img className='w-16 border-2 border-black rounded-md' src={`http://localhost:8800${splitImagePaths(item.images)[0]}`} alt="" />
                                                    <img className='w-16 border-2 border-black rounded-md' src={`http://localhost:8800${splitImagePaths(item.images)[1]}`} alt="" />
                                                    <img className='w-16 border-2 border-black rounded-md' src={`http://localhost:8800${splitImagePaths(item.images)[2]}`} alt="" />
                                                </td>
                                                <td className="whitespace-nowrap px-6 py-4">{item.name}</td>
                                                <td className="whitespace-nowrap px-6 py-4">{item.phone}</td>
                                            </tr>



                                            : <>
                                                <tr className=' '><td colSpan={7} className="p-8 text-center text-primary text-4xl">No products found</td></tr>
                                            </>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <div className="flex justify-end">
                    <div className="flex flex-col">
                        <div className="m-1 mt-2 flex gap-1 text-lg font-bold"><span className='text-primary'>Total Sale: </span> <span>{total}</span></div>
                    </div>
                </div>
            </div>


        </div >
    )
}

export default Sale