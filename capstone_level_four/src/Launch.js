import React from "react";
import { Link } from "react-router-dom";
import LaunchNew from "./LaunchNew";

function Launch(){
    return(
        <div className="buttonsContainer">
            <button className="buttons">Old Launches</button>
            <div className="linkDiv">
                <Link className="link" to='/launchNew'>Upcoming Launches</Link>
            </div>
        </div>
    )
}

export default Launch