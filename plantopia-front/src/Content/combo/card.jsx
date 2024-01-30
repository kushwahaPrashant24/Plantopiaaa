import React from "react";
import '../content.css';
import Button from "@mui/material/Button";

function Cards(props){

    function HandleClick() {
        console.log("Add to my garden");
    }

    return <div >
         <div className="Card">
        <center><img id="card-img"  src={props.img}/></center>
       <div id="Card-prop">
       <p id="oldprice">{props.oldprice}</p> 
       <p id="price">{props.price}</p>
       <p id="About">{props.About}</p>
       <p>{props.Rating}</p>
       <Button onClick={HandleClick} id="button-card" variant="contained" color="success">
       {props.button}
    </Button>
      

        </div>
        </div>
    </div>
}

export default Cards;