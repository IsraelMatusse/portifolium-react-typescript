//import React from "react"; import Contact from "./Contact";import Texto from "../components/Texto";
import NavBar from "../components/NavBar";
import FooterComponent from "../components/Footer";
import About from "../components/About";
import Experience from "../components/Experience";
const Home=()=>{
    return(
        <div>
            
            <NavBar/>
            <About />
            <Experience />
            <FooterComponent />
        </div>
           
        )
    
}
export default Home;