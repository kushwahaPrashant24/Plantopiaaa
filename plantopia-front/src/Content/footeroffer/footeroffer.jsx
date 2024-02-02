import React from "react";
import './footeroffer.css';
import Pabble from '../../Images/pa.jpeg';
import Button from '@mui/material/Button';

function Footeroffer() {
    return  <div id="footeroffer">
     <div id="Pabble-data">
        <h1>Pabble Start Rs. 59</h1>
        <p>Add visiual and texture feature to your garden with wide range of naturel pabbles</p>
        <Button variant="contained" color="success">Contained</Button>
        </div>
        <div>
        <img id="Pabble" src={Pabble} />
        </div>
    </div>
}

export default Footeroffer;