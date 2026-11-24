"use client";
import React, { useState } from "react";
import { Icon } from "@iconify/react";

interface SearchFilterProps {
  onSearch?: (query: string, category: string, budget: string) => void;
}

const SearchFilter: React.FC<SearchFilterProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedBudget, setSelectedBudget] = useState("All Budget");

  const handleInputChange = (query: string) => {
    setSearchQuery(query);
    onSearch?.(query, selectedCategory, selectedBudget);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    onSearch?.(searchQuery, category, selectedBudget);
  };

  const handleBudgetChange = (budget: string) => {
    setSelectedBudget(budget);
    onSearch?.(searchQuery, selectedCategory, budget);
  };

  return (
    <div className="grid grid-cols-4 md:grid-cols-3 gap-4 items-center mb-8 bg-white px-2 md:px-5 py-3 md:py-6 shadow-sm rounded-[16px]">
      {/* Search Input */}
      <div className="relative md:col-span-1 col-span-4">
        <Icon
          icon="mdi:magnify"
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
        />
        <input
          type="text"
          placeholder="Search cars..."
          value={searchQuery}
          onChange={(e) => handleInputChange(e.target.value)}
          className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/* Category Dropdown */}
      <div className="relative md:col-span-1 col-span-2">
        <select
          value={selectedCategory}
          onChange={(e) => handleCategoryChange(e.target.value)}
          className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer w-full"
        >
          <option>All Categories</option>
          <option>Sedan</option>
          <option>SUV</option>
          <option>Hatchback</option>
          <option>Coupe</option>
          <option>Truck</option>
          <option>Convertible</option>
        </select>
        <Icon
          icon="mdi:chevron-down"
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none"
        />
      </div>

      {/* Budget Dropdown */}
      <div className="relative md:col-span-1 col-span-2">
        <select
          value={selectedBudget}
          onChange={(e) => handleBudgetChange(e.target.value)}
          className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer w-full"
        >
          <option>All Budget</option>
          <option>Under ₦20M</option>
          <option>₦20M - ₦40M</option>
          <option>₦40M - ₦60M</option>
          <option>₦60M - ₦80M</option>
          <option>Above ₦80M</option>
        </select>
        <Icon
          icon="mdi:chevron-down"
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none"
        />
      </div>
    </div>
  );
};

export default SearchFilter;
