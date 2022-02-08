import React, { useContext } from "react";
import {ButtonContext} from "./buttonContext"

function LaunchOld(){
    const {launchOldData} = useContext(ButtonContext)
    return(
        <div className="launchDiv">
            <h1 className="launchHeader">Past Launches</h1>
            {launchOldData.map(launch => {
                return(
                    <div key={launch.id}>
                        <h1 className="launchName">{launch.name}</h1>
                        <h3 className="launchInfo">Mission Description: {launch.mission.description}</h3>
                        <h4 className="launchInfo">Mission Type: {launch.mission.type}
                            <br />
                            Orbit Type: {launch.mission.orbit.name}</h4>
                        <div className="launchLocationDiv">
                            <div className="launchLocationContent">
                                <img 
                                    src={launch.image} 
                                    alt='rocket'
                                    className="launchImage"
                                />
                            </div>
                            <div className="launchLocationContent">
                                <h3 className="blastOff">Launching From
                                    <br />
                                    {launch.pad.location.name}
                                </h3>
                                <h4 className="blastOff">Blasted off</h4>
                                <div>
                                    <h1>{launch.net}</h1>
                                </div>
                            </div>
                        </div>
                        <hr className="horizonatlLine"/>
                    </div>
                )
            })}
        </div>
    )
}

export default LaunchOld