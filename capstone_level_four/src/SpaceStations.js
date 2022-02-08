import React from "react";
import {Link} from "react-router-dom"


function SpaceStations(){
    return(
        <div className="buttonsContainer">
            <div className="linkDiv">
                <Link 
                    className="link"
                    to='/activeSpaceStations'
                >
                    Orbiting Space <br/> Stations
                </Link>
            </div>
            <div className="linkDiv">
                <Link 
                    className="link" 
                    to='/deactivatedSpaceStations'
                >
                    Deorbiting Space Stations
                </Link>
            </div>
        </div>
    )
}

export default SpaceStations