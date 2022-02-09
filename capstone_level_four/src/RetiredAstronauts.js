import React, { useContext } from "react";
import {ButtonContext} from "./buttonContext"
import {useNavigate} from "react-router-dom"


function RetiredAstronauts(){
    const {retiredAstronauts} = useContext(ButtonContext)
    const navigate = useNavigate()

    return(
        <div>
            <h1 className="astronautsHeader">Retired Astronauts</h1>
            {retiredAstronauts.map(astronaut => {
                return(
                    <div key={astronaut.id}>
                        <div className="astronautsContent">
                            <h1 className="astronautsName">{astronaut.name}</h1>
                            <img src={astronaut.profile_image_thumbnail} alt='profile of astronaut' />
                            <h3>Date of Birth: {astronaut.date_of_birth}</h3>
                            <h3>Bio: {astronaut.bio}</h3>
                            <hr className="astronautHR"/>
                        </div>
                    </div>
                )
            })}
            <div className="navButtonDiv">
                <button className="navButton" onClick={() => {navigate('/')}}>Go to Home</button>
                <button className="navButton" onClick={() => {navigate('/launch')}}>Go to Space Launches</button>
                <button className="navButton" onClick={() => {navigate('/spaceStations')}}>Go to Space Stations</button>
            </div>
        </div>
    )
}

export default RetiredAstronauts