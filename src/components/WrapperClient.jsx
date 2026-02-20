"use client";
import { useState, use, useMemo, useEffect } from "react";
import Search from "./Search";
import FilterRegion from "./FilterRegion";
import Card from "./Card";
const WrapperClient = ({ countriesData }) => {
  const result = use(countriesData);

  if (!result.success) {
    return (
      <div className="p-4 text-red-400 border border-red-400 bg-red-50/5 rounded-md">
        <p className="font-semibold">Failed to load data</p>
        <p className="text-sm opacity-80">{result.error}</p>
      </div>
    );
  }

  const originalData = result.data;

  const [selectedRegion, setSelectedRegion] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  const filteredCountries = useMemo(() => {
    return originalData
      .filter((c) => (selectedRegion ? c.region === selectedRegion : true))
      .filter((c) =>
        c.name.common.toLowerCase().includes(debouncedSearch.toLowerCase()),
      );
  }, [originalData, selectedRegion, debouncedSearch]);

  const regions = useMemo(() => {
    return [...new Set(originalData.map((c) => c.region).filter(Boolean))];
  }, [originalData]);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
        <Search
          className="md:w-2/3 lg:w-1/2"
          value={searchTerm}
          onChange={(e) => {
            const value = e.target.value.replace(/^\s+/, "");
            setSearchTerm(value);
          }}
          onClick={() => setSearchTerm("")}
        />
        <FilterRegion
          regions={regions}
          selectedRegion={selectedRegion}
          setSelectedRegion={setSelectedRegion}
          className="w-2/3 md:w-1/3 lg:w-1/4"
        />
      </div>
      <Card filteredCountries={filteredCountries} />
    </div>
  );
};

export default WrapperClient;
