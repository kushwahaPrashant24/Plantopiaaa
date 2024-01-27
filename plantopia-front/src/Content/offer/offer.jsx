import React from "react";
import "./offer.css";
import image from "../../Images/air purify plant.jpg";

function Offer() {
  return (
    <div id="offer">
      <div className="offer-main">
        <div className="offer-one">
          <img className="one" src={image} />
        </div>
        <div className="offer-two">
          <h1>NASA</h1>
          <h3>RECOMMENDED</h3>
          <h2>AIR PURIFY PLNTS</h2>
          <div className="discount">
          <span>UP TO</span>
          <p>50%</p><span>OFF</span>
          </div>
        </div>
      </div>
      <div className="offer-main">
        <div className="offer-one">
          <img className="one" src={image} />
        </div>
        <div className="offer-two"></div>
      </div>
    </div>
  );
}

export default Offer;
