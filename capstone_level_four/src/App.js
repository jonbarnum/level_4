import React from "react";
import Header from "./Header";
import {Routes, Route} from "react-router-dom"
import Home from "./Home";
import Launch from "./Launch";
import Astronauts from "./Astronauts";
import SpaceStations from "./SpaceStations";
import Footer from "./Footer";
import LaunchNew from "./LaunchNew";
import './stylesheet.css'

function App(){
    return(
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/launch' element={<Launch />} />
                <Route path='/spaceStations' element={<SpaceStations />} />
                <Route path='/astronauts' element={<Astronauts />} />
                <Route path='/launchNew' element={<LaunchNew />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App