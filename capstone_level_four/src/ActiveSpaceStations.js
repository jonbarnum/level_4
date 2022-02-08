import React, { useContext } from "react";
import {ButtonContext} from "./buttonContext"

function ActiveSpaceStations(){
    const {activeSpaceStations} = useContext(ButtonContext)
    return(
        <div className="spaceStationContainer">
            <h1 className="spaceStationHeader">Space Stations</h1>
            {activeSpaceStations.map(station => {
                return(
                    <div key={station.id} className="spaceStationsDiv">
                        <h1 className="spaceStationContent">{station.name}</h1>
                        <h2 className="spaceStationContent">Founded: {station.founded}</h2>
                        <h4 className="spaceStationContent">Description: {station.description}</h4>
                        <div className="spaceStationImgDiv">
                            <img 
                                src={station.image_url} 
                                alt="space stations"
                                className="spaceStationImg"
                            />
                        </div>
                        <hr className="spaceStationHorizonatlLine"/>
                    </div>
                )
            })}
        </div>
    )
} 

export default ActiveSpaceStations