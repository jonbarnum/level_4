import React, { useContext } from "react";
import {ButtonContext} from "./buttonContext"
import {useNavigate} from "react-router-dom"

function LaunchNew(){
    const {launchNewData} = useContext(ButtonContext)
    const navigate = useNavigate()

    return(
        <div className="launchDiv">
            <h1 className="launchHeader">Ready To launch</h1>
            {launchNewData.map(launch => {
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
                                <h4 className="blastOff">Blast Off On</h4>
                                <div>
                                    <h1>{launch.net}</h1>
                                </div>
                            </div>
                        </div>
                        <hr className="horizonatlLine"/>
                    </div>
                )
            })}
            <div className="navButtonDiv">
                <button className="navButton" onClick={() => {navigate('/')}}>Go to Home</button>
                <button className="navButton" onClick={() => {navigate('/astronauts')}}>Go to Astronauts</button>
                <button className="navButton" onClick={() => {navigate('/spaceStations')}}>Go to Space Stations</button>
            </div>
        </div>
    )
}

export default LaunchNew