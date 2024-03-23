import React from "react";
import img from "../../Images/plantopia-logo.png"
import Search from "./Search bar/Search";
import Login from "./login";



function Navbar() {
    return <div id="main-logo">
       <div id="logo"><img className="img" src={img} /></div>
        <Search />
        <Login />
        
    </div>
}

export default Navbar;