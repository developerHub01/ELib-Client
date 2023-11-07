import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const animProp = "transition-all duration-100 ease-in-out";
const ErrorPage = () => {
  return (
    <section className="w-full h-screen bg-gray-950 grid place-items-center overflow-hidden">
      <Helmet>
        <title>EL 404</title>
      </Helmet>
      <div className="flex flex-col flex-shrink-0 justify-center items-center gap-4 select-none relative before:content=['*'] before:absolute before:w-full before:h-full before:aspect-square before:rounded-full before:bg-white/20 before:flex-shrink-0 before:backdrop-blur-sm before:animate-ping">
        <div className="text-center flex flex-col gap-5 relative z-10 p-5 text-white">
          <h1 className="text-[100px] sm:text-[150px] md:text-[200px] text-white font-black">
            404
          </h1>
          <Link
            to="/"
            className={`py-3 px-5 bg-white/10 hover:bg-white/40 backdrop-blur-sm text-base md:text-xl rounded-md text-white ${animProp}`}
          >
            Move To Home Page
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
