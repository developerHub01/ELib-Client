import React from "react";
import { useState } from "react";
import { HiBars3BottomRight, HiBars3 } from "react-icons/hi2";
import { AiFillHome } from "react-icons/ai";
import { BiSolidBookAdd } from "react-icons/bi";
import { ImBooks } from "react-icons/im";
import { FaBookBookmark } from "react-icons/fa6";
import { BiSolidLogIn, BiSolidLogOut } from "react-icons/bi";
import { BsFillMoonFill, BsSunFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [themeModeStatus, setThemeModeStatus] = useState(false);
  const [sideBarStatus, setSideBarStatus] = useState(false);
  const animProp = "transition-all duration-100 ease-in-out";

  const navItems = [
    {
      text: "Home",
      path: "/",
      icon: <AiFillHome className="text-2xl flex-shrink-0" />,
    },
    {
      text: "All Books",
      path: "/",
      icon: <ImBooks className="text-2xl flex-shrink-0" />,
    },
    {
      text: "Borrowed Books",
      path: "/",
      icon: <FaBookBookmark className="text-2xl flex-shrink-0" />,
    },
    {
      text: "Add Books",
      path: "/",
      icon: <BiSolidBookAdd className="text-2xl flex-shrink-0" />,
    },
  ];
  const loginLogoutItem = [
    {
      text: "Login",
      path: "/",
      icon: <BiSolidLogIn className="text-2xl flex-shrink-0" />,
    },
    {
      text: "Logout",
      path: "/",
      icon: <BiSolidLogOut className="text-2xl flex-shrink-0" />,
    },
  ];

  return (
    <div
      className={`${
        sideBarStatus ? "w-[80px] md:w-[300px]" : "md:w-[80px]"
      } bg-gray-950 h-screen p-3 select-none flex flex-col justify-between items-center gap-5 overflow-hidden ${animProp} relative z-20 shadow-2xl shadow-black/80`}
    >
      <div className="w-full flex flex-col gap-8">
        <div
          className={`w-full flex ${
            sideBarStatus ? "flex-col-reverse md:flex-row" : "flex-col-reverse"
          } justify-between items-center gap-3`}
        >
          <div className="flex justify-start items-center gap-3 cursor-pointer overflow-hidden">
            <span className="w-10 h-10 grid place-items-center bg-white rounded-full text-2xl font-bold flex-shrink-0">
              EL
            </span>
            <span
              className={`${
                sideBarStatus ? "hidden md:block" : "hidden"
              } text-white text-xl font-semibold overflow-hidden`}
            >
              ELib
            </span>
          </div>
          <span
            className="text-white text-4xl cursor-pointer flex-shrink-0"
            onClick={() => {
              setSideBarStatus((prev) => !prev);
            }}
          >
            {sideBarStatus ? <HiBars3BottomRight /> : <HiBars3 />}
          </span>
        </div>
        <ul className="w-full flex flex-col gap-2 list-none">
          {navItems.map(({ text, icon, path }) => (
            <li className="w-full" key={text}>
              <Link
                to={path}
                className={`w-full flex items-center gap-3 ${
                  sideBarStatus
                    ? "justify-center md:justify-start"
                    : "justify-center"
                } bg-white/5 hover:bg-white/20 ${animProp} p-2 rounded-lg text-white overflow-hidden`}
              >
                {icon}
                {sideBarStatus && (
                  <span className="whitespace-nowrap hidden md:block">
                    {text}
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <ul className="w-full flex flex-col gap-2 list-none">
        {loginLogoutItem.map(({ text, icon, path }) => (
          <li className="w-full" key={text}>
            <Link
              to={path}
              className={`w-full flex items-center gap-3 ${
                sideBarStatus
                  ? "justify-center md:justify-start"
                  : "justify-center"
              } bg-white/5 hover:bg-white/20 ${animProp} p-2 rounded-lg text-white overflow-hidden`}
            >
              {icon}{" "}
              {sideBarStatus && (
                <span className="whitespace-nowrap hidden md:block">
                  {text}
                </span>
              )}
            </Link>
          </li>
        ))}
        <li className="w-full" title="profile">
          <Link
            to="/"
            className={`w-full flex items-center gap-2 ${
              sideBarStatus ? "justify-start" : "justify-center"
            } bg-white/5 hover:bg-white/20 ${animProp} p-2 rounded-lg text-white overflow-hidden`}
          >
            <img
              src="https://i.ibb.co/3YLrwzH/Photography-and-Videography-Services.jpg"
              alt=""
              className="max-w-[40px] max-h-[40px] w-full h-full aspect-square rounded-full object-cover flex-shrink-0"
            />
            {sideBarStatus && (
              <span className="whitespace-nowrap">abc@gmail.com</span>
            )}
          </Link>
        </li>
        <li>
          <button
            onClick={() => setThemeModeStatus((prev) => !prev)}
            className={`w-full flex items-center gap-2
             justify-center bg-white/5 hover:bg-white/20 ${animProp} p-2 rounded-lg text-white overflow-hidden text-2xl`}
          >
            {themeModeStatus ? <BsSunFill /> : <BsFillMoonFill />}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
