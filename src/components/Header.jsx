"use client";
import ThemeChange from "./ThemeChange";
const Header = () => {
  return (
    <div className="fixed w-full left-0 right-0 z-50 shadow bg-element-bg">
      <div className="flex justify-between items-center max-w-container mx-auto px-4 py-4 lg:px-16">
        <h1 className="font-extrabold text-base md:text-lg lg:text-xl">
          Where in the world?
        </h1>
        <ThemeChange />
      </div>
    </div>
  );
};

export default Header;
