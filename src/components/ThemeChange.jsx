"use client";
import { useContext } from "react";
import { ContextTheme } from "@/context/ThemeContext";
import { MdOutlineDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
const ThemeChange = () => {
  const { theme, setTheme } = useContext(ContextTheme);
  return (
    <>
      {theme === "dark" ? (
        <button
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => setTheme("light")}
        >
          <CiLight className="size-5 md:size-6" />
          <span className="font-semibold text-sm md:text-base">Light Mode</span>
        </button>
      ) : (
        <button
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => setTheme("dark")}
        >
          <MdOutlineDarkMode className="size-5 md:size-6" />
          <span className="font-semibold text-sm md:text-base">Dark Mode</span>
        </button>
      )}
    </>
  );
};

export default ThemeChange;
