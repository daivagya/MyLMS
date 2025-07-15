import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";
const SearchBar = ({ data }) => {
  const navigate = useNavigate();
  const [input, setInput] = useState(data ? data : "");

  const onSearchHandler = (e) => {
    e.preventDefault();
    navigate("/course-list/" + input);
  };

  return (
    <form
      onSubmit={onSearchHandler}
      className="bg-white flex items-center rounded font-light shadow-sm border border-gray-200 gap-3 "
    >
      <img className="pl-4" src={assets.search_icon} alt="search-icon" />
      <input
        onChange={(e) => setInput(e.target.value)}
        className=" min-w-0 w-full outline-none text-gray-500"
        type="text"
        placeholder="Search courses"
        value={input}
      />
      <button
        className="bg-blue-500 rounded text-white px-4 py-2 text-sm md:text-xl"
        type="submit"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
