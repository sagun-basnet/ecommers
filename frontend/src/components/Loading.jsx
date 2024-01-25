import React, { useEffect } from "react";
import "./loading.css";
import Left from "../images/applelogoleft.png";
import Right from "../images/applelogoright.png";

const Loading = () => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const loadingMain = document.querySelector(
        ".loadingMain"
      );
      if (loadingMain) {
        loadingMain.style.display = "none";
      }
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);



  return (
    <div className="loadingMain fixed">
      <div className="left">
        <img src={Left} alt="" />
        <h1>Welcome To</h1>
      </div>
      <div className="right">
        <img src={Right} alt="" />
        <h1>AppleTradeZone</h1>
      </div>
    </div>
  );
};

export default Loading;
