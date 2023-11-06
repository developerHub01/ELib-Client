import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import { FaUserEdit } from "react-icons/fa";
const animProp = "transition-all duration-100 ease-in-out";
const CategoryPageCard = ({ id }) => {
  return (
    <div className="w-full h-full flex flex-col p-5 bg-gray-950 rounded-xl gap-3 shadow-2xl group">
      <div className="w-full h-full max-h-[300px] rounded-lg overflow-hidden relative">
        <Link
          to="/"
          className={`uppercase text-sm border select-none py-1 px-2 bg-white/10 group-hover:bg-white/20 backdrop-blur-sm rounded-full text-white absolute left-2 top-2 ${animProp}`}
        >
          {id}
        </Link>
        <img
          src="https://i.ibb.co/TrS1cGX/inaki-del-olmo-NIJu-EQw0-RKg-unsplash.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full flex flex-col gap-2 justify-center items-start text-white">
        <Link to="/" className="w-full flex justify-between items-center gap-2">
          <h3
            className={`text-lg font-semibold group-hover:underline ${animProp}`}
          >
            A People's History of the United States
          </h3>
          <span
            className={`text-2xl aspect-square bg-white/5 p-2 rounded-full group-hover:bg-white/20 ${animProp}`}
          >
            <BsArrowUpRight />
          </span>
        </Link>
        <Rating rating={5} />
        <div className="flex gap-2 justify-start items-center">
          <span className="text-xl w-10 h-10 rounded-full grid place-items-center bg-white/10 backdrop-blur-sm">
            <FaUserEdit />
          </span>
          <p>Name</p>
        </div>
      </div>
    </div>
  );
};

export default CategoryPageCard;
