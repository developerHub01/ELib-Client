import React from "react";
import { Link } from "react-router-dom";
import { IoReturnDownBack } from "react-icons/io5";
const animProp = "transition-all duration-100 ease-in-out";
const BorrowedBookCard = () => {
  return (
    <div className="w-full h-full flex flex-col p-5 bg-gray-950 rounded-xl gap-3 shadow-2xl group">
      <div className="w-full h-full max-h-[300px] rounded-lg overflow-hidden relative">
        <Link
          to={`/`}
          className={`uppercase text-sm border select-none py-1 px-2 bg-white/10 group-hover:bg-white/20 backdrop-blur-sm rounded-full text-white absolute left-2 top-2 ${animProp}`}
        >
          Sci-Fi & Fantasy
        </Link>
        <img
          src="https://i.ibb.co/TrS1cGX/inaki-del-olmo-NIJu-EQw0-RKg-unsplash.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full flex flex-col gap-2 justify-center items-start text-white">
        <Link
          to={`/`}
          className="w-full flex justify-between items-center gap-2"
        >
          <h3
            className={`text-lg font-semibold group-hover:underline ${animProp}`}
          >
            A People's History of the United States
          </h3>
        </Link>
        <div className="w-full flex flex-col justify-center items-center gap-3 py-2">
          <div className="w-full flex justify-between items-center gap-2">
            <p>Borrowed</p>
            <p>22 Nov 2023</p>
          </div>
          <span className="w-full h-[2px] bg-white/40"></span>
          <div className="w-full flex justify-between items-center gap-2">
            <p>Return</p>
            <p>22 Nov 2023</p>
          </div>
        </div>
        <button
          className={`w-full ${animProp} flex justify-center items-center gap-3 text-white bg-white/20 backdrop-blur-sm hover:bg-white/40 px-5 py-3 rounded-md capitalize`}
        >
          Return Book
          <span className="text-xl">
            <IoReturnDownBack />
          </span>
        </button>
      </div>
    </div>
  );
};

export default BorrowedBookCard;
