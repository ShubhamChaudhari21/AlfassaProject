import React from "react";
import "../Styles/SearchSection.css";
import search from "../images/search.png";
import mic from "../images/mic.png";

function SearchSection() {
  return (
    <div className="searchSectionComponent">
      <div className="searchContent d-flex flex-column justify-content-center align-items-center">
        <img
          src="https://alfassa.org/imgs/general/logo-53877.png"
          alt="alfassaImage"
          className="alfassaImage"
        />

        <p className="searchTitle text-center">
          Insieme per creare un futuro migliore!
        </p>

        <form class="d-flex flex-row justify-content-center align-items-center inputForm">
          <input
            className="searchInput "
            autocomplete="off"
            placeholder="Type a keyword..."
          />
          <img className=" images" src={mic} alt="mic" />
          <img className=" images" src={search} alt="search" />
        </form>

        <div className="iconTray d-flex col justify-content-center align-items-center flex-wrap">
          <div className="d-flex flex-column align-items-center">
            <img
              className="alfaSocialIcon"
              alt="alfaSocialIcon"
              src="https://alfassa.org/alfasocial.png"
            />
            <p>AlfaSocial</p>
          </div>
          <div className="d-flex flex-column align-items-center">
            <img
              className="alfaTubeIcon"
              alt="alfaTubeIcon"
              src="https://alfassa.org/alfassatube-icon.png"
            ></img>
            <p>AlfaTube</p>
          </div>
          <div className="d-flex flex-column align-items-center">
            <img
              className="newsIcon"
              alt="newsIcon"
              src="https://alfassa.org/news.png"
            ></img>
            <p>News</p>
          </div>
          <div className="d-flex flex-column align-items-center">
            <img
              className="alfassaIcon"
              alt="alfassaIcon"
              src="https://alfassa.org/alfaworld.png"
            ></img>
            <p>Alfassa</p>
          </div>
        </div>

        <p className="footer mb-0 text-center">
          You can install our search engine on your browser.
        </p>
      </div>
    </div>
  );
}

export default SearchSection;
