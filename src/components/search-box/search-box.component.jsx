import React from "react";
import "./search-box.styles.css";

export const SearchBox = ({ placeholder, SearchResult }) => {
  return (
    <input
      className="Search"
      type="search"
      placeholder={placeholder}
      onChange={SearchResult}
    />
  );
};
