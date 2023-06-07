import React from "react";

const SearchBar = ({ handleSearch }) => {
  return (
    <>
    <br />
    <input
      className="search-input"
      type="text"
      placeholder="Search by name"
      onChange={(e) => handleSearch(e.target.value)}
    />
    </>
  );
};

export default SearchBar;