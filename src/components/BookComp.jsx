import React from "react";

const BookComp = ({ children }) => {
  const generateShadow = () => {
    let shadow = "";
    for (let i = 1; i <= 20; i++) {
      shadow += `${i}px ${i}px ${
        i % 2 ? "rgb(156, 163, 175)" : "rgb(17, 24, 39)"
      }`;
      if (i < 20) shadow += ", ";
    }
    return shadow;
  };

  return (
    <div className="pr-5 pb-5">
      <div
        className="relative w-full h-full py-16 px-5 border rounded-s-2xl border-l-[20px] sm:border-l-[40px] border-gray-400 bg-gray-950 text-center text-white flex flex-col gap-12 justify-between shadow-2xl"
        style={{
          boxShadow: generateShadow(),
        }}
      >
        <img
          src="https://i.ibb.co/8zGCw9N/bg.png"
          alt=""
          className="absolute z-0 top-0 left-0 w-full h-full object-cover opacity-20"
        />
        <div className="w-full relative z-10">{children}</div>
        <p className="text-right -rotate-6 font-signFont text-3xl md:text-6xl underline select-none mt-3">
          Shakil
        </p>
      </div>
    </div>
  );
};

export default BookComp;
