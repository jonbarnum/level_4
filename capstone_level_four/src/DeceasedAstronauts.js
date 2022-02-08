import React, { useContext } from "react";
import {ButtonContext} from "./buttonContext"


function DeceasedAstronauts(){
    const {deceasedAstronauts} = useContext(ButtonContext)
    return(
        <div>
            <h1 className="astronautsHeader">Astronauts who live among the stars</h1>
            {deceasedAstronauts.map(astronaut => {
                return(
                    <div key={astronaut.id}>
                        <div className="astronautsContent">
                            <h1 className="astronautsName">{astronaut.name}</h1>
                            <img src={astronaut.profile_image_thumbnail} alt='profile of astronaut' />
                            <h3>Date of Birth: {astronaut.date_of_birth}</h3>
                            <h3>Date of Death: {astronaut.date_of_death}</h3>
                            <h3>Bio: {astronaut.bio}</h3>
                            <hr className="astronautHR"/>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default DeceasedAstronauts