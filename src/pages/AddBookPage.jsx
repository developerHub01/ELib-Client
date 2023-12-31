import React from "react";
import Container from "../components/Container";
import BookComp from "../components/BookComp";
import { BiSolidBookAdd } from "react-icons/bi";
import { Formik, Field, Form } from "formik";
import { toast } from "react-toastify";
import axios from "axios";
import { serverApi } from "../constant/constant";
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

const AddBookPage = () => {
  const initialValues = {
    bookName: "",
    bookImgLink: "",
    quantity: "",
    author: "",
    category: "history",
    rating: "",
    description: "",
  };
  const handleAddBooks = (bookData) => {
    console.log(`${serverApi}/addbook`);
    axios
      .post(`${serverApi}/addbook`, bookData)
      .then((res) => {
        if (res.data) {
          return toast("Added Successfully");
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
            Add Book
          </h2>
          <div className="w-full mx-auto flex flex-col gap-5 justify-center items-center">
            <Formik
              className="w-full"
              initialValues={initialValues}
              onSubmit={(value, { resetForm }) => {
                handleAddBooks(value);
                resetForm(initialValues);
              }}
            >
              <Form className="w-full flex flex-col gap-5 pt-4">
                <div className="w-full grid md:grid-cols-2 gap-5">
                  {inputBoxsData.map(({ placeholder, name, inputType }, i) => (
                    <Field
                      key={i}
                      type={inputType}
                      placeholder={placeholder}
                      name={name}
                      required
                      className="px-4 py-3 bg-white/10 outline-none hover:bg-white/20 active:bg-white/20 focus:bg-white/20 valid:bg-white/20 backdrop-blur-sm rounded-md"
                    />
                  ))}
                  <Field
                    name="category"
                    as="select"
                    placeholder="Book Category"
                    required
                    className="px-4 py-3 bg-white/10 outline-none hover:bg-white/20 active:bg-white/20 focus:bg-white/20 valid:bg-white/20 backdrop-blur-sm rounded-md"
                  >
                    {selectBoxData.map(({ name, text }, i) => (
                      <option
                        key={i}
                        value={name}
                        className="px-4 py-3 bg-gray-950 text-white"
                      >
                        {text}
                      </option>
                    ))}
                  </Field>
                  <Field
                    type="number"
                    placeholder="Book Rating"
                    name="rating"
                    required
                    className="px-4 py-3 bg-white/10 outline-none hover:bg-white/20 active:bg-white/20 focus:bg-white/20 valid:bg-white/20 backdrop-blur-sm rounded-md"
                  />
                </div>
                <Field
                  placeholder="Book Description"
                  name="description"
                  as="textarea"
                  required
                  className="w-full px-4 py-3 bg-white/10 outline-none hover:bg-white/20 active:bg-white/20 focus:bg-white/20 valid:bg-white/20 backdrop-blur-sm rounded-md min-h-[200px] max-h-52"
                />
                <button
                  type="submit"
                  className={`${animProp} self-center flex justify-center items-center gap-3 text-white bg-white/20 backdrop-blur-sm hover:bg-white/40 px-5 py-3 rounded-md capitalize`}
                >
                  Add Book
                  <span className="text-xl">
                    <BiSolidBookAdd />
                  </span>
                </button>
              </Form>
            </Formik>
          </div>
        </BookComp>
      </Container>
    </section>
  );
};

export default AddBookPage;
