import React from "react";
import {Link} from "react-router-dom"


function Astronauts(){
    return(
        <div className="buttonsContainer">
            <div className="linkDiv">
                <Link className="link" to='/activeAstronauts'>Active Astronauts</Link>
            </div>
            <div className="linkDiv">
                <Link className="link" to='/retiredAstronauts'>Retired Astronauts</Link>
            </div>
            <div className="linkDiv">
                <Link className="link" to='/deceasedAstronauts'>Deceased Astronauts</Link>
            </div>
        </div>
    )
}

export default Astronauts