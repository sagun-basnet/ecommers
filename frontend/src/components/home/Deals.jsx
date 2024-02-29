import Product from "../global/Product";
import "./home.css";

import { useEffect, useState, React } from "react";
import axios from "axios";
import HashLoader from "react-spinners/HashLoader";


const Deals = () => {
  const [products, setProducts] = useState([]);

  const loadData = async () => {
    const response = await axios.get("http://localhost:8800/api/post/getAllPost");
    setProducts(response.data);
  }

  useEffect(() => {
    loadData();
  }, []);



  return (
    <>
      <div className="dealsMainDiv mx-[1rem] mt-[1rem]">
        <h2>Today's Deals</h2>
        <div className="dealsProductDiv px-[2rem] mt-[1rem] grid grid-cols-2 sm:grid-cols-4 place-items-center gap-2 gap-y-6">
          {
            products.map(product => (
              <Product key={product.pid} pid={product.pid} image={product.mainImg} image1={product.img2} image2={product.img3} name={product.pname} price={product.price} />
            ))
          }
        </div>

      </div>
    </>
  );
};

export default Deals;
