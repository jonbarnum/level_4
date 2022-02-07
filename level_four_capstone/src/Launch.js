import React from "react";
import {useState, useEffect} from 'react';
import Timer from "./Timer";
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
    
    console.log(data)

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
                                <h3>Launching From
                                    <br />
                                    {launch.pad.location.name}
                                </h3>
                                <h4>{launch.net}</h4>
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