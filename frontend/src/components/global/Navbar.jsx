import Iphone from "../../images/iPhone.png";
import Macbook from "../../images/macbook.png";
import Watch from "../../images/watch.png";
import Airpod from "../../images/airpod.png";
import Ipad from "../../images/ipad.png";
// import Logo from "../../images/logoPng1.png";
import "./global.css";
import { NavLink, useNavigate } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import { FaSignInAlt } from "react-icons/fa";
import { RiDashboardFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa";
import Categories from "./Categories";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/authContext";
import axios from "axios";
import PostForm from "../forms/PostForm";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);
  const navigation = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [togglePro, setTogglePro] = useState(false);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category === selectedCategory ? null : category);
  };

  const handleLogout = async () => {
    await logout();
    setTogglePro(!togglePro);
  }

  const handlePost = () => {
    if (!currentUser) {
      navigation('/signin');
    } else {
      navigation('/post');
    }
  }


  return (
    <nav className="mainNav h-[14rem] flex flex-col mx-4">
      <div className="navTop h-2/5 w-full flex items-center">
        <div className="logo mr-[2.8rem] ml-[0.4rem] mt-[-0.8rem] w-[7.8rem]">
          <h1 className="cursor-pointer mt-[0.8rem] text-[#c8c8c8]">
            <span className="text-primary">A</span>
            <span className="text-black">T</span>Z
          </h1>
        </div>
        <div className="notLogo h-full w-full flex items-center">
          <div className="homeBtn ">
            <NavLink to="/">
              <button
                onClick={() => setSelectedCategory(null)}
                className="bg-bgbtn h-8 my-border grid place-items-center btn-hover w-[3rem] font-bold cursor-pointer"
              >
                <IoMdHome />
              </button>
            </NavLink>
          </div>
          <div className="search ml-8 w-[80%]">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search Your Desire Product ...."
              className="border-2 border-black rounded-md outline-none h-8 w-full p-4 font-[1.2rem]"
            />
          </div>
          <div className="navBtns ml-[1.4rem] w-1/5 h-full flex items-center justify-between">
            <button className="bg-bgbtn my-border h-8 postBtn btn-hover text-4 font-bold w-[4.6rem]" onClick={handlePost}>
              <FaPlus />
              &nbsp; Post
            </button>
            {currentUser?.role === "user" ? (
              <div className="usersBtn w-[70%]  flex justify-evenly">
                <NavLink to="/user/dashboard">
                  <button className="dashBtn my-border btn-hover w-[3.4rem] h-10 text-[1.4rem]">
                    <RiDashboardFill />
                  </button>
                </NavLink>
                <button className="userBtn w-[4.4rem] text-[1.2rem] flex justify-between py-[0.6em] bg-primary" onClick={() => setTogglePro(!togglePro)} >
                  <FaUser /> <FaAngleDown />
                </button>
                {
                  togglePro && (<div className="absolute flex flex-col rigth-0 top-16">
                    <h3>{currentUser?.name}</h3>
                    <button onClick={handleLogout}>Logout</button>
                  </div>)
                }

              </div>
            ) : (
              <NavLink to="/signin">
                <button className="transition-colors duration-200 signBtn mr-8 h-12 w-24 font-bold text-[1.1rem] bg-primary">
                  Signin&nbsp;
                  <FaSignInAlt />
                </button>
              </NavLink>
            )}
          </div>
        </div>
      </div>
      <div className="navbottom font-heading flex flex-col h-[60%]">
        <h2>Categories</h2>
        <div className="cateDiv h-full flex justify-between items-center px-[1rem]">
          <Categories
            image={Iphone}
            title="Iphones"
            link="/iphone"
            isSelected={selectedCategory === "Iphones"}
            onClick={() => handleCategoryClick("Iphones")}
          />
          <Categories
            image={Macbook}
            title="MacBooks"
            link="/macbook"
            isSelected={selectedCategory === "MacBooks"}
            onClick={() => handleCategoryClick("MacBooks")}
          />
          <Categories
            image={Watch}
            title="Watchs"
            link="/watch"
            isSelected={selectedCategory === "Watchs"}
            onClick={() => handleCategoryClick("Watchs")}
          />
          <Categories
            image={Airpod}
            title="Airpods"
            link="/airpod"
            isSelected={selectedCategory === "Airpods"}
            onClick={() => handleCategoryClick("Airpods")}
          />
          <Categories
            image={Ipad}
            title="Ipads"
            link="/ipad"
            isSelected={selectedCategory === "Ipads"}
            onClick={() => handleCategoryClick("Ipads")}
          />
        </div>
      </div>
      {/* <PostForm /> */}
    </nav>
  );
};

export default Navbar;
