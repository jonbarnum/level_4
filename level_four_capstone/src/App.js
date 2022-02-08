import React from "react";
import Header from "./Header";
import Launch from "./Launch";
import SpaceStations from "./SpaceStations";
import FavPictures from "./FavPictures";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";
import './stylesheet.css';

function App(){
    return(
        <div>
            <Header />
            <Routes>
                <Route path='/launch' element={<Launch />} />
                <Route path='/nasaimages' element={<SpaceStations />} />
                <Route path='/favpictures' element={<FavPictures />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App 