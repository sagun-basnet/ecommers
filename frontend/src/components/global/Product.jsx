import AOS from "aos";
import "aos/dist/aos.css";
import "./global.css";
import { MdUnfoldMore } from "react-icons/md";

import { useEffect } from "react";


const Product = ({ image, image1, image2, name, price }) => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    // <>
    //   <h1 className="">Product</h1>
    // </>
    <div
      className="productMainDiv rounded-[0.6rem] h-[26rem] w-full px-[3%] my-border bg-white flex flex-col gap-[0.6rem] "
      data-aos="fade-up"
    >
      <div className="productMainImg h-1/2 w-full mt-2">
        <img className="h-full w-full" src={image} alt="" />
      </div>
      <div className="text-center mt-[-0.5rem]">
        <p className="text-[1.2rem] font-bold font-heading">Name: {name}</p>
        <p className="text-primary font-bold font-heading">Rs: {price}</p>
      </div>
      <div className="productImgs h-[20%] flex gap-[0.6rem] ">
        <div className="img1 pimg">
          <img src={image1} alt="" />
        </div>
        <div className="img2 pimg">
          <img src={image} alt="" />
        </div>
        <div className="img3 pimg">
          <img src={image2} alt="" />
        </div>
      </div>
      <div className="productBtn flex justify-end ">
        <button className="rounded-[0.4rem] bg-primary p-1 my-border cursor-pointer my-flex font-bold">
          More <MdUnfoldMore />
        </button>
      </div>
    </div>
  );
};

export default Product;
