import "./global.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <div className="footerMainDiv w-full bottom-0 flex justify-evenly items-center">
      <div className="flex flex-col w-1/3 justify-center items-center">
        <div className="logo mr-[2.8rem] ml-[0.4rem] mt-[-0.8rem] w-[7.8rem] flex justify-center items-center">
          <h1 className="cursor-pointer mt-[0.8rem] text-[#c8c8c8]">
            <span className="text-primary">Apple</span>
            <span className="text-black">Trade</span>Zone
          </h1>
        </div>
        <p className="text-justify">AppleTradeZone is a trusted online marketplace for buying and selling used Apple products like iPhones, MacBooks, iPads, and more. With secure transactions, easy communication between buyers and sellers, and a user-friendly interface, we make trading your favorite Apple devices simple and hassle-free.</p>
      </div>
      <div className="flex flex-col justify-center items-center gap-2">
        <h1>Send Message</h1>
        <input className="w-full" type="email" name="email" id="" placeholder="Enter Email" />
        <textarea className="w-full" name="Message" id="" placeholder="Enter Message"></textarea>
        <input className="p-2 px-4 bg-primary rounded-md text-black cursor-pointer" type="button" value="Send" />
        <p></p>
      </div>
    </div>
  );
};

export default Footer;
