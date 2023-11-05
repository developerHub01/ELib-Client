import React, { useEffect, useState } from "react";
import { BsFillMoonFill, BsSunFill } from "react-icons/bs";

const ThemeCompo = () => {
  const [themeModeStatus, setThemeModeStatus] = useState(() => {
    // localStorage.theme === "dark" ||
    //   (!("theme" in localStorage) &&
    //     window.matchMedia("(prefers-color-scheme: dark)").matches)

    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.removeItem("theme");
    }
    return localStorage.getItem("theme");
  });
  const handleTheme = () => {
    if (localStorage.getItem("theme")) {
      localStorage.removeItem("theme");
      document.documentElement.classList.remove("dark");
    } else {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    }
    setThemeModeStatus((prev) => !prev);
  };
  const animProp = "transition-all duration-100 ease-in-out";
  return (
    <button
      onClick={handleTheme}
      className={`w-full flex items-center gap-2
   justify-center bg-white/5 hover:bg-white/20 ${animProp} p-2 rounded-lg text-white overflow-hidden text-2xl`}
    >
      {themeModeStatus ? <BsFillMoonFill /> : <BsSunFill />}
    </button>
  );
};

export default ThemeCompo;
