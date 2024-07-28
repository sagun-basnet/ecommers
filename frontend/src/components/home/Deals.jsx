import Product from "../global/Product";
import "./home.css";
import { useEffect, useState, React } from "react";
import axios from "axios";
import HashLoader from "react-spinners/HashLoader";

const Deals = () => {
  const [products, setProducts] = useState([]);
  console.log(products);

  // Function to split the image string into an array
  function splitImagePaths(imageString) {
    // Check if imageString is not null before splitting
    return imageString ? imageString.split(',') : [];
  }

  const loadData = async () => {
    try {
      const response = await axios.get("http://localhost:8800/api/post/getAllPost");
      setProducts(response.data);
    } catch (error) {
      console.error("Error loading data:", error);
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="dealsMainDiv mx-[1rem] mt-[1rem]">
      <h2>Today's Deals</h2>
      <div className="dealsProductDiv px-[2rem] mt-[1rem] grid grid-cols-2 sm:grid-cols-4 place-items-center gap-2 gap-y-6">
        {products.map(product => (
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
  );
};

export default Deals;
