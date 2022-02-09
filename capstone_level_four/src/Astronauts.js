import React from "react";
import {Link} from "react-router-dom"


function Astronauts(){
    return(
        <div className="buttonsContainer">
            <div className="linkDiv">
                <Link className="link" to='/astronauts/activeAstronauts'>Active Astronauts</Link>
            </div>
            <div className="linkDiv">
                <Link className="link" to='/astronauts/retiredAstronauts'>Retired Astronauts</Link>
            </div>
            <div className="linkDiv">
                <Link className="link" to='/astronauts/deceasedAstronauts'>Deceased Astronauts</Link>
            </div>
        </div>
    )
}

export default Astronauts