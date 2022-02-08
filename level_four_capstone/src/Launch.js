import React from "react";
import {useState, useEffect} from 'react';
import axios from "axios";

function Launch(){
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get("https://lldev.thespacedevs.com/2.2.0/launch/upcoming/")
        .then(response => {
            setData(response.data.results)
        })
        .catch(error => console.log(error))
    }, [])
    

    return(
        <div className="launchDiv">
            <h1 className="launchHeader">Ready To launch</h1>
            {data.map(launch => {
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
        </div>
    )
}

export default Launch