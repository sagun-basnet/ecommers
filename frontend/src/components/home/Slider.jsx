import { useEffect } from "react";
import "./home.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "../../images/appleProducts1.png";

const Slider = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <div
      className="sliderDiv bg-[linear-gradient(
      90deg,
      hsla(235, 100%, 78%, 1) 0%,
      hsla(222, 77%, 33%, 1) 100%
    )] flex h-[16rem] mx-[1rem] mt-[1rem]"
      data-aos="fade-right"
    >
      <div className="sliderImg w-1/2 h-full">
        <img className="h-full w-full" src={Image} alt="" />
      </div>
      <div className="sliderText flex justify-center items-center w-1/2">
        <h2 className="font-extrabold text-[3rem]">
          Your <span className="text-[#c0c0c0]">Apple</span>, Your
          <span className="text-[#c0c0c0]"> Trade</span>, Your
          <span className="text-[#c0c0c0]"> Zone</span>
        </h2>
      </div>
    </div>
  );
};

export default Slider;
