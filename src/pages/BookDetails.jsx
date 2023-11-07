import React, { useContext, useEffect, useRef, useState } from "react";
import Container from "../components/Container";
import { Link, useParams } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import Rating from "../components/Rating";
import { FaUserEdit } from "react-icons/fa";
import { FaBookBookmark } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";
import * as Yup from "yup";
import axios from "axios";
import { serverApi } from "../constant/constant";
import { LoaderContext } from "../Context/LoaderProvider";
import { AuthContext } from "../Context/AuthProvider";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";
const animProp = "transition-all duration-100 ease-in-out";

const BookDetails = () => {
  const [borrowPopUp, setBorrrowPopUp] = useState(false);
  const { user, userLoading } = useContext(AuthContext);
  const { isLoading, setIsLoading } = useContext(LoaderContext);
  const [bookDetails, setBookDetails] = useState({});
  const {
    _id,
    bookName,
    bookImgLink,
    quantity,
    author,
    category,
    rating,
    description,
  } = bookDetails;
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`${serverApi}/books/details/${id}`)
      .then((res) => {
        setBookDetails((prev) => res.data);
        setIsLoading((prev) => false);
      })
      .catch((error) => {
        console.log(error.message);
        setIsLoading((prev) => false);
      });
  }, [isLoading]);

  const handleBorrow = (bookData) => {
    bookData.id = _id;
    console.log(bookData);
    delete bookData.name;

    axios
      .post(`${serverApi}/borrowed`, bookData)
      .then((res) => {
        if (res.data.message === true) {
          setBookDetails((prev) => ({
            ...prev,
            quantity: --prev.quantity,
          }));
          setBorrrowPopUp((prev) => false);
          return toast("Borrowed Successfully");
        } else if (res.data.message) {
          return toast(res.data.message);
        } else {
          return toast("Something went wrong");
        }
      })
      .catch((error) => toast(error.message));
  };

  return (
    <section className="w-full bg-white dark:bg-gray-900 py-14">
      <Helmet>
        <title>Book Details</title>
      </Helmet>
      {!isLoading && bookDetails && (
        <Container>
          <div className="w-full grid lg:grid-cols-2 gap-5 justify-center items-center">
            <div className="w-full h-full max-h-[550px] overflow-hidden rounded-md">
              <img
                src={bookImgLink}
                alt={bookName}
                className="w-full h-full object-contain shadow-2xl"
              />
            </div>
            <div className="w-full flex flex-col gap-4 justify-center items-start">
              <Link
                to="/"
                className={`px-4 py-2 rounded-full bg-gray-950 dark:bg-white/10 dark:hover:bg-white/30 backdrop-blur-sm text-white capitalize select-none ${animProp}`}
              >
                {category}
              </Link>
              <h3 className="text-gray-950 dark:text-white text-xl md:text-2xl font-bold leading-normal">
                {bookName}
              </h3>
              <p className="text-gray-600-600 dark:text-gray-100 text-base">
                {description?.slice(0, 250) + "..."}
              </p>
              <Rating rating={rating} />
              <p className="text-gray-950 dark:text-white pb-3">
                Quantity: {quantity}
              </p>
              <div className="flex justify-start items-center p-1 text-white bg-gray-900 dark:bg-white/10 rounded-full">
                <span className="text-xl w-10 h-10 rounded-full grid place-items-center bg-gray-950 dark:bg-white/10 backdrop-blur-sm text-white">
                  <FaUserEdit />
                </span>
                <p className="px-2 text-sm capitalize">{author}</p>
              </div>
              <div className="w-full flex gap-4 self-start flex-wrap">
                {quantity ? (
                  <button
                    className={`py-3 px-8 text-white bg-gray-950 dark:bg-white/10 dark:hover:bg-white/20 rounded-full capitalize ${animProp}`}
                    onClick={() => setBorrrowPopUp((prev) => !prev)}
                  >
                    Borrow
                  </button>
                ) : (
                  <button
                    className={`py-3 px-8 text-white bg-gray-950 dark:bg-white/10 opacity-50 dark:hover:bg-white/20 rounded-full capitalize ${animProp}`}
                    onClick={() => setBorrrowPopUp((prev) => !prev)}
                    disabled
                  >
                    Borrow
                  </button>
                )}
                <Link
                  to={`/read/${_id}`}
                  className={`py-3 px-8 text-white bg-gray-950 dark:bg-white/10 dark:hover:bg-white/20 rounded-full capitalize ${animProp}`}
                >
                  Read
                </Link>
              </div>
            </div>
          </div>
        </Container>
      )}
      {borrowPopUp && user && (
        <div className="fixed z-50 top-0 left-0 w-full h-full grid place-items-center bg-white/40 p-5">
          <div className="w-full max-w-xl rounded-lg shadow-2xl py-8 p-5 bg-gray-950 flex flex-col gap-5">
            {userLoading || (
              <Formik
                initialValues={{
                  name: user.displayName,
                  email: user.email,
                  returnDate: "",
                }}
                validationSchema={Yup.object({
                  name: Yup.string().required("Required"),
                  email: Yup.string().required("Required"),
                  returnDate: Yup.string().required("Required"),
                })}
                onSubmit={(values) => {
                  handleBorrow(values);
                }}
                className="w-full"
              >
                <Form className="w-full text-white flex flex-col gap-5">
                  <div className="w-full flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm">
                      Full Name
                    </label>
                    <Field
                      name="name"
                      id="name"
                      type="text"
                      disabled
                      className="w-full px-4 py-3 bg-white/10 outline-none hover:bg-white/20 active:bg-white/20 focus:bg-white/20 valid:bg-white/20 backdrop-blur-sm rounded-md"
                    />
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm">
                      Email
                    </label>
                    <Field
                      name="email"
                      id="email"
                      type="email"
                      disabled
                      className="w-full px-4 py-3 bg-white/10 outline-none hover:bg-white/20 active:bg-white/20 focus:bg-white/20 valid:bg-white/20 backdrop-blur-sm rounded-md"
                    />
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <label htmlFor="returnDate" className="text-sm">
                      Return Date
                    </label>
                    <Field
                      name="returnDate"
                      id="returnDate"
                      type="date"
                      className="w-full px-4 py-3 bg-white/10 outline-none hover:bg-white/20 active:bg-white/20 focus:bg-white/20 valid:bg-white/20 backdrop-blur-sm rounded-md"
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row gap-5">
                    <button
                      type="submit"
                      className={`w-full ${animProp} flex justify-center items-center gap-3 text-white bg-white/20 backdrop-blur-sm hover:bg-white/40 px-5 py-3 rounded-md capitalize`}
                    >
                      Borrow
                      <span className="text-xl">
                        <FaBookBookmark />
                      </span>
                    </button>
                    <button
                      type="button"
                      className={`w-full ${animProp} flex justify-center items-center gap-3 text-white bg-white/20 backdrop-blur-sm hover:bg-white/40 px-5 py-3 rounded-md capitalize`}
                      onClick={() => setBorrrowPopUp((prev) => !prev)}
                    >
                      Cancel
                      <span className="text-xl">
                        <MdCancel />
                      </span>
                    </button>
                  </div>
                </Form>
              </Formik>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default BookDetails;
