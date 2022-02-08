import axios from "axios";
import React, { useEffect, useState } from "react";

function Astronauts(){
    const [astronauts, setAstronauts] = useState([])

    useEffect(() => {
        axios.get('https://lldev.thespacedevs.com/2.2.0/astronaut/?agency__name=National%20Aeronautics%20and%20Space%20Administration&nationality=American&status=1&limit=200')
        .then(response => {
            setAstronauts(response.data.results)
        })
        .catch(error => console.log(error))
    }, [])

    return(
        <div>
            <h1 className="astronautsHeader">Current American Astronauts Heroes and Previous Astronauts who still work NASA</h1>
            {/* {astronauts.filter((astronaut)=>(astronaut.status.name === 'Active')).map(astronaut => { */}
            {astronauts.map(astronaut => {
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

export default Astronauts