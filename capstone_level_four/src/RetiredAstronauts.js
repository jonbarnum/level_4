import React, { useContext } from "react";
import {ButtonContext} from "./buttonContext"


function RetiredAstronauts(){
    const {retiredAstronauts} = useContext(ButtonContext)
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
        </div>
    )
}

export default RetiredAstronauts