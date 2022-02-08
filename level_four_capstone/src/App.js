import React from "react";
import Header from "./Header";
import Launch from "./Launch";
import SpaceStations from "./SpaceStations";
import Astronauts from "./Astronauts";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";
import './stylesheet.css';

function App(){
    return(
        <div>
            <Header />
            <Routes>
                <Route path='/launch' element={<Launch />} />
                <Route path='/spaceStations' element={<SpaceStations />} />
                <Route path='/astronauts' element={<Astronauts />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App 