import React from "react";
import "./BodySection.css";

function CardSection(props) {
  return (
    <div className="CardSection d-flex justify-content-center">
      {/* <Carousel plugins={["arrows"]}> */}
      <div className="card">
        <img className="cardImage" src={props.image} alt=""></img>
        <div className="cardBrand d-flex">
          <img
            src="https://www.alfassa.online/wp-content/uploads/2021/10/cropped-Rosa-ALFASSA-scaled-1-32x32.jpg"
            alt=""
            class="brandImage"
          />
          <div className="brandTitle ">
            <p className="m-0 title">Alfassa</p>
            <p className="m-0 meta d-flex align-items-center">
              <div>@Alfassa</div>
              <div style={{ fontWeight: "900" }}>&bull;</div>
              <div>4 days ago</div>
            </p>
          </div>
        </div>
        <div className="cardTitle text-center">{props.title}</div>
        <div className="cardContent text-center">{props.content}</div>
      </div>
      {/* </Carousel> */}
      {/* <div className="card">
        <img className="cardImage"></img>
        <div className="cardBrand d-flex">
          <img
            src="https://www.alfassa.online/wp-content/uploads/2021/10/cropped-Rosa-ALFASSA-scaled-1-32x32.jpg"
            alt=""
            class="brandImage"
          />
          <div className="brandTitle ">
            <p className="m-0 title">Alfassa</p>
            <p className="m-0 meta">@Alfassa</p>
          </div>
        </div>
        <div className="cardTitle"></div>
        <div className="cardContent"></div>
      </div> */}
    </div>
  );
}

export default CardSection;
