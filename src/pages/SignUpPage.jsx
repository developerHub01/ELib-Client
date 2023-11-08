import React, { useContext } from "react";
import BookComp from "../components/BookComp";
import Container from "../components/Container";
import { AiOutlineGoogle } from "react-icons/ai";
import { BiSolidLogIn } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { AuthContext } from "../Context/AuthProvider";
import { toast } from "react-toastify";
import usePasswordVarification from "../customHooks/usePasswordVarification";
import * as EmailValidator from "email-validator";
import { updateProfile } from "firebase/auth";
import auth from "../firebase/config";

const animProp = "transition-all duration-100 ease-in-out";

const SignUpPage = () => {
  const { googleSignIn, setUser, signUpUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        setUser((prev) => result.user);
        navigate("/");
      })
      .catch((error) => {});
  };
  const handleSignUp = (data) => {
    const { name, profileImg, email, password } = data;
    console.log(name, profileImg, email, password);

    if (!EmailValidator.validate(email)) {
      return toast("Email is not valid");
    }

    if (!usePasswordVarification(password)) {
      return toast(
        "Password must contain a uppercase and one special character and minimum length 6"
      );
    }

    signUpUser(email, password)
      .then((userCredential) => {
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: profileImg,
        })
          .then(() => {
            toast("Signup successful");
            setUser((prev) => data);
            navigate("/");
          })
          .catch((error) => {
            toast(error.message);
          });
      })
      .catch((error) => {
        toast(error.message);
      });
  };
  return (
    <section className="py-10 bg-whit dark:bg-gray-900">
      <Container mxw="max-w-2xl">
        <BookComp>
          <h2 className="text-center text-xl sm:text-4xl font-bold text-white capitalize pb-5 font-headingFont">
            Signup
          </h2>
          <div className="w-full max-w-md mx-auto flex flex-col gap-5 justify-center items-center">
            <Formik
              className="w-full"
              initialValues={{
                name: "",
                profileImg: "",
                email: "",
                password: "",
              }}
              validationSchema={Yup.object({
                name: Yup.string().required("Required"),
                profileImg: Yup.string().required("Required"),
                email: Yup.string()
                  .email("Invalid email address")
                  .required("Required"),
                password: Yup.string().required("Required"),
              })}
              onSubmit={(values) => {
                console.log(values);
                handleSignUp(values);
              }}
            >
              <Form className="w-full flex flex-col gap-5 pt-4">
                <Field
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="w-full px-4 py-3 bg-white/10 outline-none hover:bg-white/20 active:bg-white/20 focus:bg-white/20 valid:bg-white/20 backdrop-blur-sm rounded-md"
                />
                <Field
                  type="text"
                  placeholder="Profile Pic Link"
                  name="profileImg"
                  className="w-full px-4 py-3 bg-white/10 outline-none hover:bg-white/20 active:bg-white/20 focus:bg-white/20 valid:bg-white/20 backdrop-blur-sm rounded-md"
                />
                <Field
                  type="email"
                  placeholder="Email address"
                  name="email"
                  className="w-full px-4 py-3 bg-white/10 outline-none hover:bg-white/20 active:bg-white/20 focus:bg-white/20 valid:bg-white/20 backdrop-blur-sm rounded-md"
                />
                <Field
                  type="password"
                  placeholder="Password"
                  name="password"
                  className="w-full px-4 py-3 bg-white/10 outline-none hover:bg-white/20 active:bg-white/20 focus:bg-white/20 valid:bg-white/20 backdrop-blur-sm rounded-md"
                />
                <button
                  className={`${animProp} self-center flex justify-center items-center gap-3 text-white bg-white/20 backdrop-blur-sm hover:bg-white/40 px-5 py-3 rounded-md capitalize`}
                >
                  Singup
                  <span className="text-xl">
                    <BiSolidLogIn />
                  </span>
                </button>
              </Form>
            </Formik>

            <Link to="/login" className="underline capitalize">
              Already have an account
            </Link>
            <button
              className={`${animProp} flex justify-center items-center gap-3 text-white bg-white/20 backdrop-blur-sm hover:bg-white/40 px-5 py-3 rounded-md capitalize`}
              onClick={handleGoogleSignIn}
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
