import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./scrollAnima.css";

const ScrollAnima = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <div className="top">
      <h1>Fade</h1>
      <div className="animation" data-aos="fade-up"></div>
      <div className="animation" data-aos="fade-down"></div>
      <div className="animation" data-aos="fade-right"></div>
      <div className="animation" data-aos="fade-left"></div>
      <div className="animation" data-aos="fade-up"></div>
      <div className="animation" data-aos="fade-down"></div>
      <div className="animation" data-aos="fade-right"></div>
      <div className="animation" data-aos="fade-left"></div>
      <div className="animation" data-aos="fade-up"></div>
      <div className="animation" data-aos="fade-down"></div>
      <div className="animation" data-aos="fade-right"></div>
      <div className="animation" data-aos="fade-left"></div>
      <h1>Flip</h1>
      <div className="animation" data-aos="flip-right"></div>
      <div className="animation" data-aos="flip-right"></div>
      <div className="animation" data-aos="flip-right"></div>
      <div className="animation" data-aos="flip-right"></div>
      <h1>zoom animation</h1>
      <div className="animation" data-aos="zoom-in"></div>
      <div className="animation" data-aos="zoom-out"></div>
      <div className="animation" data-aos="zoom-in"></div>
      <div className="animation" data-aos="zoom-out"></div>
      <div className="animation" data-aos="zoom-in"></div>
      <div className="animation" data-aos="zoom-out"></div>
      <div className="animation" data-aos="zoom-in"></div>
      <div className="animation" data-aos="zoom-out"></div>
      <div className="animation" data-aos="zoom-in"></div>
      <div className="animation" data-aos="zoom-out"></div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default ScrollAnima;
