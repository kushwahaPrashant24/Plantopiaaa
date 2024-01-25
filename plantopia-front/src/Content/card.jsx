import React from "react";
import './content.css';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

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
       <button onClick={HandleClick} id="button-card">{props.button}</button>
        </div>
        </div>
    </div>
}

export default Cards;