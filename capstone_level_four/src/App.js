import React from "react";
import Header from "./Header";
import {Routes, Route} from "react-router-dom"
import Home from "./Home";
import Launch from "./Launch";
import LaunchNew from "./LaunchNew";
import LaunchOld from "./LaunchOld";
import SpaceStations from "./SpaceStations";
import ActiveSpaceStations from "./ActiveSpaceStations";
import DeactivedSpaceStations from "./DeactivatedSpaceStations";
import Astronauts from "./Astronauts";
import ActiveAstronauts from "./ActiveAstronauts";
import RetiredAstronauts from "./RetiredAstronauts";
import DeceasedAstronauts from "./DeceasedAstronauts";
import Footer from "./Footer";
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
                <Route path='/launchOld' element={<LaunchOld />} />
                <Route path='/activeSpaceStations' element={<ActiveSpaceStations />} />
                <Route path='/deactivatedSpaceStations' element={<DeactivedSpaceStations />} />
                <Route path='/activeAstronauts' element={<ActiveAstronauts />} />
                <Route path='/retiredAstronauts' element={<RetiredAstronauts />} />
                <Route path='/deceasedAstronauts' element={<DeceasedAstronauts />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App