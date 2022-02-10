import React from "react";
import { Link } from "react-router-dom";

function Header(){
    return(
        <div className="headerDiv">
            <h1 className="header">
                <Link to='/' className="headerLink">
                    Home
                </Link>
            </h1>
            <h1 className="header">
                <Link to='/Launch' className="headerLink">
                    Launches
                </Link>
            </h1>
            <h1 className="header">
                <Link to='/SpaceStations' className="headerLink">
                    Space Stations
                </Link>
            </h1>
            <h1 className="header" >
                <Link to='/Astronauts' className="headerLink">
                    Astronauts
                </Link>
            </h1>
        </div>
    )
}

export default Header 