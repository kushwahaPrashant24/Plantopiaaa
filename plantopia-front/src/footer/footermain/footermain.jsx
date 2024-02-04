import React from "react";
import "../footermain/footermain.css";

function Footermain() {
  return (
    <div id="Footermain">
      <div id="info">
        <ul>
          <li>POLICY INFO</li>
          <li>MY ACCOUNT</li>
          <li>COMPANY INFO</li>
          <li>OFFICE ADDRESS</li>
        </ul>
      </div>
      <div id="info-two">
        <div id="data-one" className="Foot-data">
          <p>Cancel & Refund</p>
          <p>Privacy policy</p>
          <p>Terms & Conditions</p>
          <p>Shipping Policy</p>
        </div>
        <div id="data-two" className="Foot-data">
          <p>Order History</p>
          <p>Wishlist</p>
          <p>Login</p>
          <p>Delivery Address</p>
        </div>
        <div id="data-three" className="Foot-data">
          <p>About Us</p>
          <p>Contact Us</p>
          <p>Green wall</p>
          <p>Jobs</p>
        </div>
        <div id="data-four" className="Foot-data">
          <p>Shop No.14, Mehrauli</p>
          <p> Road, Ghaziabad,</p>
          <p>201002, India</p>
          <p>Phone: +91-8799503412</p>
        </div>
      </div>
      <div id="info-three">
    <p>Copyright © 2023 Plantopia. | www.plantopia.com</p>
      </div>
    </div>
  );
}

export default Footermain;
