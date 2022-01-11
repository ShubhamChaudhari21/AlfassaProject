import React from "react";
import "../Styles/Homepage.css";

function Footer() {
  return (
    <div className="footerBar d-flex justify-content-between px-5 py-2">
      <div className="leftContent">
        Copyright &copy; 2022 ALFASSA | Sviluppato da Wiltek SRL & KGD. All
        Rights Reserved.
      </div>
      <div className="rightContent d-flex">
        <div className="English">English</div>&nbsp;|&nbsp;
        <div className="Italian">Italian</div>
      </div>
    </div>
  );
}

export default Footer;
