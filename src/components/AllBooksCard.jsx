import React from "react";
import Rating from "./Rating";
import { BiSolidMessageSquareEdit } from "react-icons/bi";
import { FaUserEdit } from "react-icons/fa";
import { BsArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";
const animProp = "transition-all duration-100 ease-in-out";
const AllBooksCard = ({
  _id,
  category,
  bookImgLink,
  bookName,
  rating,
  author,
}) => {
  return (
    <div className="w-full h-full flex flex-col p-5 bg-gray-950 rounded-xl gap-3 shadow-2xl group">
      <div className="w-full h-full max-h-[300px] rounded-lg overflow-hidden relative">
        <Link
          to={`/category/${category}`}
          className={`uppercase text-sm border select-none py-1 px-2 bg-white/10 group-hover:bg-white/20 backdrop-blur-sm rounded-full text-white absolute left-2 top-2 ${animProp}`}
        >
          {category}
        </Link>
        <img
          src={bookImgLink}
          alt={bookName}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="w-full flex flex-col gap-3 justify-center items-start text-white">
        <Link
          to={`/details/${_id}`}
          className="w-full flex justify-between items-center gap-2"
        >
          <h3
            className={`text-lg font-semibold group-hover:underline ${animProp}`}
          >
            {bookName}
          </h3>
          <span
            className={`text-2xl aspect-square bg-white/5 p-2 rounded-full group-hover:bg-white/20 ${animProp}`}
          >
            <BsArrowUpRight />
          </span>
        </Link>
        <Rating rating={rating} />
        <div className="flex justify-start items-center rounded-full bg-white/10 p-1 text-white">
          <span className="text-xl w-10 h-10 rounded-full grid place-items-center bg-white/10 backdrop-blur-sm">
            <FaUserEdit />
          </span>
          <p className="px-2 text-sm capitalize">{author}</p>
        </div>
        <Link
          to={`/update/book/${_id}`}
          className={`w-full ${animProp} flex justify-center items-center gap-3 text-white bg-white/20 backdrop-blur-sm hover:bg-white/40 px-5 py-3 rounded-md capitalize`}
        >
          Update Book
          <span className="text-xl">
            <BiSolidMessageSquareEdit />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default AllBooksCard;
