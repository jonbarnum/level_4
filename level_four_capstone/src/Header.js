import React from "react";
import { Link } from "react-router-dom";

function Header(){
    return(
        <div className="headerDiv">
            <h1 className="header">
                <Link to='/Launch' className="link">
                    Launches
                </Link>
            </h1>
            <h1 className="header">
                <Link to='/SpaceStations' className="link">
                    Space Stations
                </Link>
            </h1>
            <h1 className="header" >
                <Link to='/Astronauts' className="link">
                    Astronauts
                </Link>
            </h1>
        </div>
    )
}

export default Header 