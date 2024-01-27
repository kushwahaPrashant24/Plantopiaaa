import React from "react";
import "./offer.css";
import Button from '@mui/material/Button';
import image from "../../Images/air purify plant.jpg";

function Offer() {
  return (
    <div id="offer">
      <div className="offer-main">
        <div className="offer-one">
          <img className="one" src={image} />
        </div>
        <div className="offer-two">
          <h1 className="offer-head1">NASA</h1>
          <h3 className="offer-head3">RECOMMENDED</h3>
          <h2 className="offer-head2">AIR PURIFY PLNTS</h2>
          <div className="discount">

            <span>UP TO</span>
            <div className="offer-data">
            <p>50%</p><span>OFF</span>
            
            </div>
            <div id="offer-button">
            <Button  className="offer-button" variant="contained" color="success">
       SHOP NOW
    </Button>
    </div>
          </div>
        </div>
      </div>
      <div className="offer-main">
        <div className="offer-one">
          <img className="one" src={image} />
        </div>
        <div className="offer-two" id="two-offer">
        <h1 className="offer-head1">SUMMER</h1>
        <p>VEGETABLE SEEDS</p>
        <p>FLAT 50% OFF</p>
        <p>Extra 5%off on shopping 599/-</p>
        
        <Button  className="offer-button"   variant="contained" color="success">
       SHOP NOW
    </Button>
   
        </div>
      </div>
    </div>
  );
}

export default Offer;
