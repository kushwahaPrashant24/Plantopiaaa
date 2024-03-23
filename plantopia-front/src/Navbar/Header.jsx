import React from "react";
import "./Navbar.css"
import Nav1 from "./Nav1/Nav1";
import Mainnav from "./Nav2/mainnav";

function Header() {
    return <div>
       <Nav1 />
       <Mainnav />
     </div>
}

export default Header;