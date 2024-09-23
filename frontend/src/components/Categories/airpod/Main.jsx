import Product from "../../global/Product";
import axios from "axios";
import { useEffect, useState } from "react";

const Main = () => {
  const [products, setProducts] = useState([]);

  const loadData = async () => {
    const response = await axios.get("http://localhost:8800/api/post/getAllPost");
    setProducts(response.data);
  }

  function splitImagePaths(imageString) {
    // Check if imageString is not null before splitting
    return imageString ? imageString.split(',') : [];
  }

  useEffect(() => {
    loadData();
  }, []);
  const airpodProducts = products.filter(product => product.type === "airpod");
  return (
    <div className="categoriesMainDiv">
      <h2>Airpods :-</h2>
      <div className="productDisplayDiv grid-flow-row-dense w-full relative">
        {airpodProducts.length === 0 ? (
          <h1 className="h-32 text-center col-span-4 text-primary">No products found</h1>
        ) : (
          airpodProducts.map(product => (
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