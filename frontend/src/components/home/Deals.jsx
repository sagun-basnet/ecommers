import Product from "../global/Product";
import "./home.css";
import Image from "../../images/phone.png";
import Image1 from "../../images/1080-iPhone_11_R_4.png";
import Image2 from "../../images/0063188_-apple-iphone-11-pro-max-_510.jpeg";
import Bimage from "../../images/blackIphone.png";
import Bimage1 from "../../images/blackIphone1.png";
import Bimage2 from "../../images/blackIphone2.png";
const Deals = () => {
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
    <div className="dealsMainDiv mx-[1rem] mt-[1rem]">
      <h2>Today's Deals</h2>
      <div className="dealsProductDiv px-[2rem] mt-[1rem] grid grid-cols-2 sm:grid-cols-4 place-items-center gap-2 gap-y-6">
        {
          products.map(product => (
            <Product key={product.pid} image={product.mainImg} image1={product.img2} image2={product.img3} name={product.pname} price={product.price} />
          ))
        }
      </div>
    </div>
  );
};

export default Deals;
