import { NavLink } from "react-router-dom";

const Categories = ({ image, title, link, isSelected, onClick }) => {
  return (
    <NavLink
      to={link}
      className="cateLink h-full flex items-center no-underline text-black font-extrabold"
      onClick={onClick}
    >
      <div
        className={`cateInDiv my-border w-[14rem] h-[60%] relative flex items-center px-[2rem] ${isSelected ? "selected" : ""
          }`}
      >
        <span className="text-[1.2rem]">{title}</span>
        <img
          className="h-[7.2rem] w-[5.4rem] absolute right-[-1rem] top-[-2rem]"
          src={image}
          alt=""
        />
      </div>
    </NavLink>
  );
};

export default Categories;
