"use client";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineClear } from "react-icons/md";
const Search = ({ className = "", onChange, value, onClick }) => {
  return (
    <div className={`relative ${className}`}>
      <IoSearchOutline className="size-5 absolute left-4 top-1/2 -translate-y-1/2" />
      <input
        type="text"
        placeholder="Search for country..."
        className="py-3 w-full rounded-md shadow-element-box bg-element-bg ps-14 focus:outline-none  text-input-color
      placeholder-input-color"
        value={value}
        onChange={onChange}
      />
      {value !== "" && (
        <MdOutlineClear
          className="size-5 absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
          onClick={onClick}
        />
      )}
    </div>
  );
};

export default Search;
