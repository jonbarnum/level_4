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
                        <Route path='/launch/launchNew' element={<LaunchNew />} />
                        <Route path='/launch/launchOld' element={<LaunchOld />} />
                    <Route path='/spaceStations' element={<SpaceStations />} />
                        <Route path='/spaceStations/activeSpaceStations' element={<ActiveSpaceStations />} />
                        <Route path='/spaceStations/deactivatedSpaceStations' element={<DeactivedSpaceStations />} />
                    <Route path='/astronauts' element={<Astronauts />} />
                        <Route path='/astronauts/activeAstronauts' element={<ActiveAstronauts />} />
                        <Route path='/astronauts/retiredAstronauts' element={<RetiredAstronauts />} />
                        <Route path='/astronauts/deceasedAstronauts' element={<DeceasedAstronauts />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App