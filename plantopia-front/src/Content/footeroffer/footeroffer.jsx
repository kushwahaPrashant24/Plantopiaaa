import React from "react";
import './footeroffer.css';
import Pabble from '../../Images/pa.jpeg'

function Footeroffer() {
    return  <div id="footeroffer">
        <img id="Pabble" src={Pabble} />
        <h1>Pabble Start Rs. 59</h1>
        <p>Add visiual and texture feature to your garden with wide range of naturel pabbles</p>
        <button class="btn">Button</button>
    </div>
}

export default Footeroffer;