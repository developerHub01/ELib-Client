import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoReturnDownBack } from "react-icons/io5";
import { LoaderContext } from "../Context/LoaderProvider";
import axios from "axios";
import { serverApi } from "../constant/constant";
import { toast } from "react-toastify";
const animProp = "transition-all duration-100 ease-in-out";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const BorrowedBookCard = ({
  _id,
  email,
  returnDate,
  id,
  borrowedDate,
  setUpdateBorrowList,
}) => {
  const [bookData, setBookData] = useState({});
  const { bookName, bookImgLink, quantity, author, category, rating } =
    bookData;
  const { isLoading, setIsLoading } = useContext(LoaderContext);
  useEffect(() => {
    axios
      .get(`${serverApi}/book/${id}`)
      .then((res) => {
        setBookData((prev) => res.data);
        setIsLoading((prev) => false);
      })
      .catch((error) => console.log(error.message));
  }, [isLoading]);
  const formatedDate = (date) => {
    date = date.split("-");
    return `${date[2]} ${months[date[1]]} ${date[1]}`;
  };
  const handleReturnBook = () => {
    axios
      .delete(`${serverApi}/returnbook/${email}/${id}`)
      .then((res) => {
        if (res.data.message === true) {
          setUpdateBorrowList((prev) => Math.round(Math.random() * 50));
          return toast("Returned successfully");
        } else {
          return toast("Something went wrong");
        }
      })
      .catch((error) => {
        return toast(error.message);
      });
  };
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
      <div className="w-full flex flex-col gap-2 justify-center items-start text-white">
        <Link
          to={`/read/${id}`}
          className="w-full flex justify-between items-center gap-2"
        >
          <h3
            className={`text-lg font-semibold group-hover:underline ${animProp}`}
          >
            {bookName}
          </h3>
        </Link>
        <div className="w-full flex flex-col justify-center items-center gap-3 py-2">
          <div className="w-full flex justify-between items-center gap-2">
            <p>Borrowed</p>
            <p>{formatedDate(borrowedDate)}</p>
          </div>
          <span className="w-full h-[2px] bg-white/40"></span>
          <div className="w-full flex justify-between items-center gap-2">
            <p>Return</p>
            <p>{formatedDate(returnDate)}</p>
          </div>
        </div>
        <button
          onClick={handleReturnBook}
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
