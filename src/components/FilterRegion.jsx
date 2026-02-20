"use client";
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/react";
import { FaAngleDown } from "react-icons/fa6";

const FilterRegion = ({
  regions,
  selectedRegion,
  setSelectedRegion,
  className = "",
}) => {
  const handleChange = (value) => {
    setSelectedRegion(value);
  };

  return (
    <div className={`relative ${className}`}>
      <Listbox value={selectedRegion} onChange={handleChange}>
        {({ open }) => (
          <>
            <ListboxButton
              className={`w-full py-3 px-4 shadow-element-box 
              font-semibold cursor-pointer 
              rounded-md bg-element-bg  
              flex justify-between items-center 
              md:gap-2 focus:outline-0`}
            >
              {selectedRegion || "Filter by Region"}
              <FaAngleDown className={`${open ? "rotate-180" : ""}`} />
            </ListboxButton>
            <ListboxOptions
              className={`absolute z-20 mt-2
              w-full font-semibold 
             shadow-element-box bg-element-bg 
              rounded-xl focus:outline-0 `}
            >
              <ListboxOption value="" className="px-4 py-2 cursor-pointer">
                All Regions
              </ListboxOption>
              {regions.map((region, index) => (
                <ListboxOption
                  key={index}
                  value={region}
                  className="px-4 py-2 cursor-pointer"
                >
                  {region}
                </ListboxOption>
              ))}
            </ListboxOptions>
          </>
        )}
      </Listbox>
    </div>
  );
};

export default FilterRegion;
