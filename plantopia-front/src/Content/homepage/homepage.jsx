import React, { useState } from "react";
import Photos from "./photocart";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import '../content.css';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import image1 from '../../Images/pic1.jpeg';

function Homepage(){
const [image, setImage] = useState(Photos);


function HandleClickInc(){
    const Next = (image +1) % Photos.length;
    setImage(Next);
    console.log(setImage);
};

function HandleClickDec(){
    const Next = (image - 1) % Photos.length;
    setImage(Next);
    console.log(setImage);
};

    return <div id="homepage">
    <ArrowBackIosNewIcon onClick={HandleClickDec}/>
    <div id="images">
      <img id="one" src={Photos[setImage]}  />
      <img id="two" src={image1}  />
    
    </div>
    <ArrowForwardIosIcon onClick={HandleClickInc} />
    </div>
}

export default Homepage;