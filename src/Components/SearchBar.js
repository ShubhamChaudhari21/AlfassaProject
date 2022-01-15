import React, { useState } from "react";
import "../Styles/SearchSection.css";
import search from "../images/search.png";
import mic from "../images/mic.png";

function SearchBar() {
  const redirectToURL = (event) => {
    let url = "https://www.alfassa.org/web/search?q=";
    const inputElement = document.getElementById("searchInput");
    if (inputElement.value !== "")
      window.location.href = url + inputElement.value;
  };
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ width: "100%" }}
    >
      <form className="d-flex flex-row justify-content-center align-items-center inputForm">
        <input
          type="text"
          className="searchInput "
          autoComplete="off"
          placeholder="Type a keyword..."
          id="searchInput"
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              event.preventDefault();
              redirectToURL();
            }
          }}
        />
        <img className=" images" src={mic} alt="mic" />
        <img
          className=" images"
          src={search}
          alt="search"
          onClick={() => redirectToURL()}
        />
      </form>
    </div>
  );
}

export default SearchBar;
