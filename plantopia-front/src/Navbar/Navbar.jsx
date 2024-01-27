import React from "react";
import css from "./Navbar.css";
import img from "../Images/plantopia-logo.png";
import Search from "./Search";
import Login from "./login";



function Navbar() {
    return <div id="main-logo">
       <div id="logo"><img className="img" src={img} /></div>
        <Search />
        <Login />
        
    </div>
}

export default Navbar;