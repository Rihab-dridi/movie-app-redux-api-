import React, { useState } from "react";
import Rate from "./rate";

const Search = () => {
  return (
    <div className="search-bar">
      <img
        style={{ width: "40px", height: "40px", padding: "0" }}
        src="https://www.pngmart.com/files/5/Movie-PNG-Image.png"
      ></img>

      <span className="search-frag">
        <input type="text"
         placeholder="Search"
          className="search"
           autoFocus />
      </span>
      <Rate />
    </div>
  );
};

export default Search;
