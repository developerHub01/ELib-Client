import React, { useState } from "react";
import BookComp from "../components/BookComp";
import Container from "../components/Container";
import { AiOutlineGoogle } from "react-icons/ai";
import { BiSolidLogIn } from "react-icons/bi";
import { Link } from "react-router-dom";
const animProp = "transition-all duration-100 ease-in-out";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    profileImg: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <section className="py-10 bg-whit dark:bg-gray-900">
      <Container mxw="max-w-2xl">
        <BookComp>
          <h2 className="text-center text-xl sm:text-4xl font-bold text-white capitalize pb-5 font-headingFont">
            Signup
          </h2>
          <div className="w-full max-w-md mx-auto flex flex-col gap-5 justify-center items-center">
            <form
              className="w-full flex flex-col gap-5 pt-4"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                placeholder="Profile Pic Link"
                name="profileImg"
                onChange={handleChange}
                value={formData.profileImg}
                className="px-4 py-3 bg-white/10 outline-none hover:bg-white/20 active:bg-white/20 focus:bg-white/20 valid:bg-white/20 backdrop-blur-sm rounded-md"
              />
              <input
                type="email"
                placeholder="Email address"
                name="email"
                onChange={handleChange}
                value={formData.email}
                className="px-4 py-3 bg-white/10 outline-none hover:bg-white/20 active:bg-white/20 focus:bg-white/20 valid:bg-white/20 backdrop-blur-sm rounded-md"
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
                value={formData.password}
                className="px-4 py-3 bg-white/10 outline-none hover:bg-white/20 active:bg-white/20 focus:bg-white/20 valid:bg-white/20 backdrop-blur-sm rounded-md"
              />
              <button
                className={`${animProp} self-center flex justify-center items-center gap-3 text-white bg-white/20 backdrop-blur-sm hover:bg-white/40 px-5 py-3 rounded-md capitalize`}
              >
                Singup
                <span className="text-xl">
                  <BiSolidLogIn />
                </span>
              </button>
            </form>
            <Link to="/login" className="underline capitalize">
              Already have an account
            </Link>
            <button
              className={`${animProp} flex justify-center items-center gap-3 text-white bg-white/20 backdrop-blur-sm hover:bg-white/40 px-5 py-3 rounded-md capitalize`}
            >
              Singup with{" "}
              <span className="text-xl">
                <AiOutlineGoogle />
              </span>
            </button>
          </div>
        </BookComp>
      </Container>
    </section>
  );
};

export default SignUpPage;
