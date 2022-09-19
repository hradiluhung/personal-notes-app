import React from "react";
import PropTypes from "prop-types";
import "./searchBar.css";

const SearchBar = ({ keyword, keywordChange }) => {
  return (
    <div className="note-app__search-bar">
      <input
        type="text"
        placeholder="Search by title"
        value={keyword}
        onChange={(event) => keywordChange(event.target.value)}
      />
    </div>
  );
};

SearchBar.propType = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};

export default SearchBar;
