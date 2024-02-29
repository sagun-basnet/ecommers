import "./global.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <div className="footerMainDiv w-full bottom-0">
      <h2 style={{ textAlign: "center" }}>Footer</h2>
    </div>
  );
};

export default Footer;
