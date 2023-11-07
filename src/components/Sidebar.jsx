import React, { useContext } from "react";
import { useState } from "react";
import { HiBars3BottomRight, HiBars3 } from "react-icons/hi2";
import { AiFillHome } from "react-icons/ai";
import { BiSolidBookAdd } from "react-icons/bi";
import { ImBooks } from "react-icons/im";
import { FaBookBookmark } from "react-icons/fa6";
import { BiSolidLogIn, BiSolidLogOut } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";
import ThemeCompo from "./ThemeCompo";
import { AuthContext } from "../Context/AuthProvider";
const animProp = "transition-all duration-100 ease-in-out";

const Sidebar = () => {
  const [sideBarStatus, setSideBarStatus] = useState(false);
  const { user, signOutUser } = useContext(AuthContext);

  const listIcon = `text-lg md:text-2xl flex-shrink-0`;
  const navItems = [
    {
      text: "Home",
      path: "/",
      icon: <AiFillHome className={listIcon} />,
    },
    {
      text: "All Books",
      path: "/allbooks",
      icon: <ImBooks className={listIcon} />,
    },
    {
      text: "Borrowed Books",
      path: "/borrowed",
      icon: <FaBookBookmark className={listIcon} />,
    },
    {
      text: "Add Books",
      path: "/addbook",
      icon: <BiSolidBookAdd className={listIcon} />,
    },
  ];
  return (
    <div
      className={`${
        sideBarStatus ? "w-[70px] md:w-[280px]" : "md:w-[80px]"
      } flex-shrink-0 flex-grow-0 bg-gray-950 h-screen p-2 select-none flex flex-col justify-between items-center gap-5 overflow-hidden ${animProp} relative z-20 shadow-2xl shadow-black/80`}
    >
      <div className="w-full flex flex-col gap-8">
        <div
          className={`w-full flex ${
            sideBarStatus ? "flex-col-reverse md:flex-row" : "flex-col-reverse"
          } justify-between items-center gap-3`}
        >
          <Link
            to="/"
            className="flex justify-start items-center gap-3 cursor-pointer overflow-hidden"
          >
            <span className="w-8 h-8 md:w-10 md:h-10 grid place-items-center bg-white rounded-full text-xl md:text-2xl font-bold flex-shrink-0">
              EL
            </span>
            <span
              className={`${
                sideBarStatus ? "hidden md:block" : "hidden"
              } text-white text-xl font-semibold overflow-hidden`}
            >
              ELib
            </span>
          </Link>
          <span
            className="text-white text-lg md:text-4xl cursor-pointer flex-shrink-0"
            onClick={() => {
              setSideBarStatus((prev) => !prev);
            }}
          >
            {sideBarStatus ? (
              <HiBars3BottomRight className="hidden md:block" />
            ) : (
              <HiBars3 className="hidden md:block" />
            )}
          </span>
        </div>
        <ul className="w-full flex flex-col gap-2 list-none">
          {navItems.map(({ text, icon, path }) => (
            <li className="w-full" key={text}>
              <NavLink
                to={path}
                className={`w-full flex items-center gap-3 ${
                  sideBarStatus
                    ? "justify-center md:justify-start"
                    : "justify-center"
                } bg-white/5 hover:bg-white/20 backdrop-blur-sm ${animProp} p-2 rounded-lg text-white overflow-hidden`}
              >
                {icon}
                {sideBarStatus && (
                  <span className="whitespace-nowrap hidden md:block">
                    {text}
                  </span>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <ul className="w-full flex flex-col gap-2 list-none">
        {user ? (
          <>
            <li className="w-full">
              <button
                onClick={signOutUser}
                className={`w-full flex items-center gap-3 ${
                  sideBarStatus
                    ? "justify-center md:justify-start"
                    : "justify-center"
                } bg-white/5 hover:bg-white/20 backdrop-blur-sm ${animProp} p-2 rounded-lg text-white overflow-hidden`}
              >
                <BiSolidLogOut className={listIcon} />
                {sideBarStatus && (
                  <span className="whitespace-nowrap hidden md:block">
                    Logout
                  </span>
                )}
              </button>
            </li>
            <li className="w-full" title="profile">
              <Link
                to="/"
                className={`w-full flex items-center gap-3 ${
                  sideBarStatus ? "justify-start" : "justify-center"
                } bg-white/5 hover:bg-white/20 backdrop-blur-sm ${animProp} p-2 rounded-lg text-white overflow-hidden`}
              >
                <span
                  className="max-w-[30px] md:max-w-[40px] max-h-[30px] md:max-h-[40px] w-full h-full aspect-square rounded-full overflow-hidden object-cover flex-shrink-0"
                  style={{
                    background: `url('https://i.ibb.co/3YLrwzH/Photography-and-Videography-Services.jpg')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <img
                    src={user.photoURL}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </span>
                {sideBarStatus && (
                  <span className="whitespace-normal w-full text-sm">
                    {user?.email}
                  </span>
                )}
              </Link>
            </li>
          </>
        ) : (
          <li className="w-full">
            <Link
              to={"/login"}
              className={`w-full flex items-center gap-3 ${
                sideBarStatus
                  ? "justify-center md:justify-start"
                  : "justify-center"
              } bg-white/5 hover:bg-white/20 backdrop-blur-sm ${animProp} p-2 rounded-lg text-white overflow-hidden`}
            >
              <BiSolidLogIn className={listIcon} />
              {sideBarStatus && (
                <span className="whitespace-nowrap hidden md:block">Login</span>
              )}
            </Link>
          </li>
        )}
        <li>
          <ThemeCompo />
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
