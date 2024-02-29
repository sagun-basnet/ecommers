import Product from "../../global/Product";
import Image from "../../../images/phone.png";
import Image1 from "../../../images/1080-iPhone_11_R_4.png";
import Image2 from "../../../images/0063188_-apple-iphone-11-pro-max-_510.jpeg";
import Bimage from "../../../images/blackIphone.png";
import Bimage1 from "../../../images/blackIphone1.png";
import Bimage2 from "../../../images/blackIphone2.png";
import { useEffect, useState } from "react";
import axios from "axios";

const Main = () => {
  const [products, setProducts] = useState([]);

  const loadData = async () => {
    const response = await axios.get("http://localhost:8800/api/post/getAllPost");
    setProducts(response.data);
  }

  useEffect(() => {
    loadData();
  }, []);

  const iphoneProducts = products.filter(product => product.type === "iphone");
  return (
    <div className="categoriesMainDiv">
      <h2>Iphone :-</h2>
      <div className="productDisplayDiv grid-flow-row-dense w-full relative">
        {iphoneProducts.length === 0 ? (
          <h1 className="h-32 text-center col-span-4 text-primary">No products found</h1>
        ) : (
          iphoneProducts.map(product => (
            <Product
              key={product.pid}
              pid={product.pid}
              image={product.mainImg}
              image1={product.img2}
              image2={product.img3}
              name={product.pname}
              price={product.price}
            />
          ))
        )}

      </div>
    </div>
  );
};

export default Main;