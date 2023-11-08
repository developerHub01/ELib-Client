import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { LoaderContext } from "../Context/LoaderProvider";
import { serverApi } from "../constant/constant";
import { toast } from "react-toastify";
import { Field, Formik, Form } from "formik";
import BookComp from "../components/BookComp";
import Container from "../components/Container";
import { BiSolidMessageSquareEdit } from "react-icons/bi";

const animProp = "transition-all duration-100 ease-in-out";

const inputBoxsData = [
  {
    placeholder: "Book Name",
    name: "bookName",
    inputType: "text",
  },
  {
    placeholder: "Book Image Link",
    name: "bookImgLink",
    inputType: "text",
  },
  {
    placeholder: "Book Quantity",
    name: "quantity",
    inputType: "number",
  },
  {
    placeholder: "Book Author",
    name: "author",
    inputType: "text",
  },
];
const selectBoxData = [
  {
    name: "history",
    text: "History",
  },
  {
    name: "horror",
    text: "Horror",
  },
  {
    name: "sci-fi-fantasy",
    text: "Sci-Fi & Fantasy",
  },
  {
    name: "science-math",
    text: "Science & Math",
  },
];

const UpdateBook = () => {
  const [bookData, setBookData] = useState({});
  const { isLoading, setIsLoading } = useContext(LoaderContext);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`${serverApi}/book/${id}`).then((res) => {
      setBookData((prev) => res.data);
      setIsLoading((prev) => false);
      console.log(res.data);
    });
  }, [isLoading]);

  const handleUpdateBook = (bookData) => {
    console.log(bookData);
    axios
      .patch(`${serverApi}/updatebook`, { ...bookData, id })
      .then((res) => {
        if (res.data) {
          return toast("Updated Successfully");
        } else {
          return toast("Something went wrong");
        }
      })
      .catch((error) => toast(error.message));
  };
  return (
    <section className="py-10 bg-whit dark:bg-gray-900">
      <Container mxw="max-w-3xl">
        <BookComp>
          <h2 className="text-center text-xl sm:text-4xl font-bold text-white capitalize pb-5 font-headingFont">
            Update Book
          </h2>
          <div className="w-full mx-auto flex flex-col gap-5 justify-center items-center">
            {!isLoading && bookData._id && (
              <Formik
                className="w-full"
                initialValues={{
                  bookName: bookData.bookName,
                  bookImgLink: bookData.bookImgLink,
                  quantity: bookData.quantity,
                  author: bookData.author,
                  category: bookData.category,
                  rating: bookData.rating,
                  description: bookData.description,
                }}
                onSubmit={(values) => handleUpdateBook(values)}
              >
                <Form className="w-full flex flex-col gap-5 pt-4">
                  <div className="w-full grid md:grid-cols-2 gap-5">
                    {inputBoxsData.map(
                      ({ placeholder, name, inputType }, i) => (
                        <Field
                          key={i}
                          type={inputType}
                          placeholder={placeholder}
                          name={name}
                          className="px-4 py-3 bg-white/10 outline-none hover:bg-white/20 active:bg-white/20 focus:bg-white/20 valid:bg-white/20 backdrop-blur-sm rounded-md"
                        />
                      )
                    )}
                    <Field
                      name="category"
                      as="select"
                      placeholder="Book Category"
                      className="px-4 py-3 bg-white/10 outline-none hover:bg-white/20 active:bg-white/20 focus:bg-white/20 valid:bg-white/20 backdrop-blur-sm rounded-md"
                    >
                      {selectBoxData.map(({ name, text }, i) => (
                        <option
                          key={i}
                          className="px-4 py-3 bg-gray-950 text-white"
                          value={name}
                        >
                          {text}
                        </option>
                      ))}
                    </Field>
                    <Field
                      type="number"
                      placeholder="Book Rating"
                      name="rating"
                      className="px-4 py-3 bg-white/10 outline-none hover:bg-white/20 active:bg-white/20 focus:bg-white/20 valid:bg-white/20 backdrop-blur-sm rounded-md"
                    />
                  </div>
                  <Field
                    placeholder="Book Description"
                    name="description"
                    as="textarea"
                    className="w-full px-4 py-3 bg-white/10 outline-none hover:bg-white/20 active:bg-white/20 focus:bg-white/20 valid:bg-white/20 backdrop-blur-sm rounded-md min-h-[200px] max-h-52"
                  />
                  <button
                    type="submit"
                    className={`${animProp} self-center flex justify-center items-center gap-3 text-white bg-white/20 backdrop-blur-sm hover:bg-white/40 px-5 py-3 rounded-md capitalize`}
                  >
                    Update Book
                    <span className="text-xl">
                      <BiSolidMessageSquareEdit />
                    </span>
                  </button>
                </Form>
              </Formik>
            )}
          </div>
        </BookComp>
      </Container>
    </section>
  );
};

export default UpdateBook;
