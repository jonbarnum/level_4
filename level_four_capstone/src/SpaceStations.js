import React, {useState, useEffect} from "react";
import axios from "axios";


function SpaceStations(){
    const [spaceStations, setSpaceStations] = useState([])

    useEffect(() => {
        axios.get("https://lldev.thespacedevs.com/2.2.0/spacestation/?limit=20")
        .then(response => {
            setSpaceStations(response.data.results)
        })
        .catch(error => console.log(error))
    }, [])

    return(
        <div className="spaceStationContainer">
            <h1 className="spaceStationHeader">Space Stations</h1>
            {spaceStations.map(station => {
                return(
                    <div key={station.id} className="spaceStationsDiv">
                        <h1 className="spaceStationContent">{station.name}</h1>
                        <h2 className="spaceStationContent">Founded: {station.founded} Deorbited: {station.deorbited}</h2>
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

export default SpaceStations