import AOS from "aos";
import "aos/dist/aos.css";
import "./global.css";
import { MdUnfoldMore } from "react-icons/md";

import { useEffect } from "react";
import { Link } from "react-router-dom";


const Product = ({ pid, images, name, price }) => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  console.log(images);
  return (
    <div
      className="productMainDiv rounded-[0.6rem] h-[26rem] w-full px-[3%] my-border bg-white flex flex-col gap-[0.6rem] "
      data-aos="fade-up"
    >
      <div className="productMainImg h-1/2 w-full mt-2">
        <img className="h-full w-full" src={`http://localhost:8800${images[0]}`} alt="" />
      </div>
      <div className="text-center mt-[-0.5rem]">
        <p className="text-[1.2rem] font-bold font-heading">Name: {name}</p>
        <p className="text-primary font-bold font-heading">Rs: {price}</p>
      </div>
      <div className="productImgs h-[20%] flex gap-[0.6rem] ">
        {
          images.map((img, inx) => {
            return <div className=" pimg" key={inx}>
              <img src={`http://localhost:8800${images[inx]}`} alt="" />
            </div>
          })
        }

      </div>
      <div className="productBtn flex justify-end ">
        <Link to={`/product/${pid}`}>
          <button className="rounded-[0.4rem] bg-primary p-1 my-border cursor-pointer my-flex font-bold">
            More <MdUnfoldMore />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Product;
