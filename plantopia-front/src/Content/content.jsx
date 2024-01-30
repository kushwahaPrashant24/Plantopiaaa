import React from "react";
import Homepage from "../Content/homepage/homepage";
import Combo from "./combo/combo";
import Offer from "./offer/offer";
import Footeroffer from "./footeroffer/footeroffer";



function  Content(){
    return <div><Homepage />
    <Combo />
  <Offer />
  <Footeroffer />
    </div>
}

export default Content;