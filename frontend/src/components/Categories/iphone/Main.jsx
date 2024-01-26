import Product from "../../global/Product";
import Image from "../../../images/phone.png";
import Image1 from "../../../images/1080-iPhone_11_R_4.png";
import Image2 from "../../../images/0063188_-apple-iphone-11-pro-max-_510.jpeg";
import Bimage from "../../../images/blackIphone.png";
import Bimage1 from "../../../images/blackIphone1.png";
import Bimage2 from "../../../images/blackIphone2.png";

const Main = () => {
  const products = [
    {
      pid: 1,
      pname: "iphone",
      price: 45000,
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, corporis quam eveniet veniam delectus consequuntur facere repellendus dolor amet accusantium vero repellat quos officia placeat aliquam, accusamus sunt, voluptate tenetur vel illo?",
      type: "iphone",
      mainImg: Image,
      img2: Image1,
      img3: Image2,
      uid: 6,
    },
    {
      pid: 2,
      pname: "iphone",
      price: 40000,
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, corporis quam eveniet veniam delectus consequuntur facere repellendus dolor amet accusantium vero repellat quos officia placeat aliquam, accusamus sunt, voluptate tenetur vel illo?",
      type: "iphone",
      mainImg: Bimage,
      img2: Bimage1,
      img3: Bimage2,
      uid: 2,
    }
  ]
  return (
    <div className="categoriesMainDiv">
      <h2>Iphones :-</h2>
      <div className="productDisplayDiv">
        {
          products.map(product => (
            product.type === "iphone" ? (
              <Product key={product.pid} image={product.mainImg} image1={product.img2} image2={product.img3} name={product.pname} price={product.price} />
            ) : (
              <h1>No items found</h1>
            )
          ))
        }

      </div>
    </div>
  );
};

export default Main;