import React from "react";
import { Link } from "react-router-dom";
import { BsArrowUpRight } from "react-icons/bs";

const Category = ({ id, name, imgLink }) => {
  const animProp = "transition-all duration-100 ease-in-out";
  return (
    <Link
      to={`/category/${id}`}
      target="_blank"
      className="w-full h-full flex flex-col p-5 bg-gray-950 rounded-xl gap-3 shadow-2xl group"
    >
      <div className="w-full h-full max-h-[300px] rounded-lg overflow-hidden">
        <img src={imgLink} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="flex justify-between items-center gap-2 text-white">
        <h3 className="text-2xl font-semibold">{name}</h3>
        <button
          className={`text-2xl aspect-square bg-white/5 p-2 rounded-full group-hover:bg-white/20 ${animProp}`}
        >
          <BsArrowUpRight />
        </button>
      </div>
    </Link>
  );
};

export default Category;
