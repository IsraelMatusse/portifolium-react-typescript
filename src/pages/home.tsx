import React from "react";
import Texto from "../components/Texto";
import NavBar from "../components/NavBar";
import Contact from "./Contact";
import FooterComponent from "../components/Footer";
import About from "../components/About";
const Home=()=>{
    return(
        <div>
            <Texto/>
            <NavBar/>
            <About />
            <FooterComponent />
        </div>
           
        )
    
}
export default Home;