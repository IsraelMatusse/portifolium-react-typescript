import React from "react";
import "../styles/NavBar.css"
import { Link, NavLink } from "react-router-dom";
const NavBar=()=>{
    return(
        <div id="navBar">
                <ul>
                <li> <NavLink to={"/"} >Home </NavLink>  </li>
                    <li> <Link to={"blog"} >Blog </Link>  </li>
                    <li> <Link to={"contact"} >Contact </Link>  </li>
                    <li> <Link to={"contact"} >About </Link>  </li>
                </ul>
        </div>
    );
}; export default NavBar;