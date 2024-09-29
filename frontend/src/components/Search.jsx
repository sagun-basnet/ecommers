import React from 'react'
import Product from './global/Product';

const Search = ({ myData }) => {
    console.log(myData);
    function splitImagePaths(imageString) {
        // Check if imageString is not null before splitting
        return imageString ? imageString.split(',') : [];
    }

    return (
        <div className='w-[95vw] h-[88vh] bg-white bg-opacity-50 backdrop-blur-xl rounded drop-shadow-lg top-20 left-[2rem] border-2 overflow-y-scroll shadow-lg z-20 fixed'>
            <div className=" dealsProductDiv p-[2rem] mt-[1rem] grid grid-cols-2 sm:grid-cols-4 place-items-center gap-2 gap-y-6" >
                {myData.map(product => (
                    product.buyer_id === null && (
                        <Product
                            key={product.pid}
                            pid={product.pid}
                            images={splitImagePaths(product.images)} // Split the image paths here
                            name={product.pname}
                            price={product.price}
                        />
                    )
                ))}
            </div>
        </div>
    )
}

export default Search