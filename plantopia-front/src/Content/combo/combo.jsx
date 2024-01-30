import React from "react";
import combooffer from './combooffer';
import Cards from "./card";


function createcard(Combo){
  return <Cards 
         key={Combo.id}
         img={Combo.img}
         oldprice={Combo.oldprice}
         price={Combo.price}
         About={Combo.About}
         button={Combo.button}


  />
}


function Combo() {
  console.log(combooffer);

    return <div>
        <h2 id="offer-heading"><center>Value For Money - COMBO OFFER</center></h2>
        <div id="combo">{combooffer.map(createcard)}</div>
    </div>
}

export default Combo;