import React from "react";
import { Link } from "react-router-dom";

function Launch(){
    return(
        <div className="buttonsContainer">
            <div className="linkDiv">
                <Link 
                    className="link"
                    to='/launch/launchOld'
                >
                    Past Launches
                </Link>
            </div>
            <div className="linkDiv">
                <Link 
                    className="link" 
                    to='/launch/launchNew'
                >
                    Upcoming Launches
                </Link>
            </div>
        </div>
    )
}

export default Launch