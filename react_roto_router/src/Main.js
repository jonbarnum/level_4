import React from "react";
import {Routes, Route} from "react-router-dom"
import Home from "./Home";
import About from "./About";
import Services from "./Services";

function Main(){
    return(
        <div className="mainDiv">
            <Routes>
                <Route path='home' element={<Home />} />
                <Route path='about' element={<About />} />
                <Route path='services' element={<Services />} />
            </Routes>
        </div>
    )
}

export default Main 