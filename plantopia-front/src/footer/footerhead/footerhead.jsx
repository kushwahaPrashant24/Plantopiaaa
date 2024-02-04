import React from "react";
import "../footerhead/footerhead.css";
import Magnatic from "../../Images/Magnatic-card.jpg";
import Dilavery from "../../Images/free shiping.png";
import Insta from '../../Images/social/insta.png';
import Facebook from '../../Images/social/facebook.png';
import Pin from '../../Images/social/pin.png';
import Twitter from '../../Images/social/twitter.png';
import Youtube from '../../Images/social/youtube.png';


function FooterHead() {
  return (
    <div id="foooterHead">
      <div id="Footer-boxone">
        <div>
          <img className="boximg" src={Magnatic} />
        </div>
        <div className="boxcommon">
          <h1>SECURE PAYMENT</h1>
          <h3>100% Secure Payment</h3>
        </div>
      </div>
      <div id="Footer-boxtwo">
        <div>
          <img className="boximg" src={Dilavery} />
        </div>
        <div  className="boxcommon">
          <h1>FREE SHIPPING</h1>
          <h3>For Orders Above Rs.399</h3>
        </div>
      </div>
      <div id="Footer-boxthree">
        <div><h1>SHOW US SUPPORT SOME ON SOCIAL MEDIA</h1></div>
        <div id="social-media">
            <img src={Facebook} />
            <img src={Twitter} /> 
            <img src={Insta} />
            <img src={Youtube} />
            <img src={Pin} />
        </div>
      </div>
    </div>
  );
}

export default FooterHead;
