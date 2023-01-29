import React from "react";

const SearchBox = ({ onChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search a cat"
        type="search"
      />
    </div>
  );
};

export default SearchBox;
