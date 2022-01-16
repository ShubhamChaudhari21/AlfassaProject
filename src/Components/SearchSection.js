import React from "react";
import "../Styles/SearchSection.css";
import AlfassaImage from "../images/Alfassa.jpg";
import SearchBar from "./SearchBar";

function SearchSection(props) {
  return (
    <div className="searchSectionComponent">
      <div className="searchContent d-flex flex-column justify-content-center align-items-center">
        <img src={AlfassaImage} alt="alfassaImage" className="alfassaImage" />

        <p className="searchTitle text-center">
          Insieme per creare un futuro migliore!
        </p>
        <SearchBar />
        <div className="iconTray d-flex col justify-content-center align-items-center flex-wrap">
          <a
            href="https://www.alfassasocial.it/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="d-flex flex-column align-items-center">
              <img
                className="alfaSocialIcon"
                alt="alfaSocialIcon"
                src="https://www.enersat.it/wp-content/uploads/2022/01/Alfa-Social-1.png"
              />
              <p>AlfaSocial</p>
            </div>
          </a>
          <a
            href="https://www.alfassatube.com/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="d-flex flex-column align-items-center">
              <img
                className="alfaTubeIcon"
                alt="alfaTubeIcon"
                src="https://www.enersat.it/wp-content/uploads/2022/01/Alfa-Tube.png"
              ></img>
              <p>AlfaTube</p>
            </div>
          </a>
          <a href="https://www.alfassa.online" target="_blank" rel="noreferrer">
            <div className="d-flex flex-column align-items-center">
              <img
                className="newsIcon"
                alt="newsIcon"
                src="https://www.enersat.it/wp-content/uploads/2022/01/Alfa-Media.png"
              ></img>
              <p>News</p>
            </div>
          </a>
          <a href="https://www.alfassa.net/" target="_blank" rel="noreferrer">
            <div className="d-flex flex-column align-items-center">
              <img
                className="alfassaIcon"
                alt="alfassaIcon"
                src="https://www.enersat.it/wp-content/uploads/2022/01/ALFASSA.png"
              ></img>
              <p>Alfassa</p>
            </div>
          </a>
        </div>

        <p className="footer mb-0 text-center">
          You can install our search engine on your browser.
        </p>
      </div>
    </div>
  );
}

export default SearchSection;
