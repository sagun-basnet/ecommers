import Product from "../../global/Product";
import { useEffect, useState } from "react";
import axios from "axios";

const Main = () => {
  const [products, setProducts] = useState([]);

  function splitImagePaths(imageString) {
    // Check if imageString is not null before splitting
    return imageString ? imageString.split(',') : [];
  }

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
            product.buyer_id === null &&
            <Product
              key={product.pid}
              pid={product.pid}
              images={splitImagePaths(product.images)}
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