import React from "react";
import "./BodySection.css";

function CardSection(props) {
  return (
    <div className="CardSection d-flex justify-content-center">
      <div className="card">
        <div className="cardTitle">{props.title}</div>
        {props.image.length !== 0 && props.content.length !== 0 ? (
          <div className="d-flex cardContentBody">
            <img className="cardImage" src={props.image} />
            <div className="cardContent text-justify">{props.content}</div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default CardSection;
