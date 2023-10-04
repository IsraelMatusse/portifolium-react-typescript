import React from "react";
import "../styles/NavBar.css"
import { Link, NavLink } from "react-router-dom";
const NavBar=()=>{
    return(
        <div id="navBar">
                <ul>
                <li> <NavLink to={"/"} >Home </NavLink>  </li>
                    <li> <a href=""> Formation </a> </li>
                    <li> <a href="">Experience</a>  </li>
                    <li> <Link to={"contact"} >Contact </Link>  </li>
                </ul>
        </div>
    );
}; export default NavBar;