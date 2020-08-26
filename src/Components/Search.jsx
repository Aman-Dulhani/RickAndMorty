import React from "react";
import "./styles.css";

const Search = ({ searchText, onChange, placeholder }) => (
  <div className="searchBar">
    <input
      className={"search"}
      placeholder={placeholder}
      type="text"
      value={searchText}
      onChange={onChange}
    />
  </div>
);

export default Search;
