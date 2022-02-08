import React, {useState, useEffect} from "react";
import axios from "axios";

const ButtonContext = React.createContext()

function ButtonContextProvider(props){
    const [launchNewData, setLaunchNewData] = useState([])
    const [launchOldData, setLaunchOldData] = useState([])
    const [activeSpaceStations, setActiveSpaceStations] = useState([])
    const [deactivatedSpaceStations, setDeactivatedSpaceStations] = useState([])
    const [activeAstronauts, setActiveAstronauts] = useState([])
    const [retiredAstronauts, setRetiredAstronauts] = useState([])
    const [deceasedAstronauts, setDeceasedAstronauts] = useState([])


    useEffect(() => {
        axios.get("https://lldev.thespacedevs.com/2.2.0/launch/upcoming/")
        .then(response => {
            setLaunchNewData(response.data.results)
        })
        .catch(error => console.log(error))

        axios.get('https://lldev.thespacedevs.com/2.2.0/launch/previous/?is_crewed=false&include_suborbital=true&related=false')
        .then(response => {
            setLaunchOldData(response.data.results)
        })
        .catch(error => console.log(error))

        axios.get('https://lldev.thespacedevs.com/2.2.0/spacestation/?status=1')
        .then(response => {
            setActiveSpaceStations(response.data.results)
        })
        .catch(error => console.log(error))

        axios.get('https://lldev.thespacedevs.com/2.2.0/spacestation/?status=2')
        .then(response => {
            setDeactivatedSpaceStations(response.data.results)
        })
        .catch(error => console.log(error))

        axios.get('https://lldev.thespacedevs.com/2.2.0/astronaut/?agency__name=National%20Aeronautics%20and%20Space%20Administration&nationality=American&status=1&limit=200')
        .then(response => {
            setActiveAstronauts(response.data.results)
        })
        .catch(error => console.log(error))

        axios.get('https://lldev.thespacedevs.com/2.2.0/astronaut/?nationality=American&status=2&limit=25')
        .then(response => {
            setRetiredAstronauts(response.data.results)
        })
        .catch(error => console.log(error))

        axios.get('https://lldev.thespacedevs.com/2.2.0/astronaut/?nationality=American&status=11&limit=50')
        .then(response => {
            setDeceasedAstronauts(response.data.results)
        })
        .catch(error => console.log(error))

    }, [])


    return(
        <ButtonContext.Provider value={{
            launchNewData,
            launchOldData,
            activeSpaceStations,
            deactivatedSpaceStations,
            activeAstronauts,
            retiredAstronauts,
            deceasedAstronauts
        }}>
            {props.children}
        </ButtonContext.Provider>
    )
}

export {ButtonContextProvider, ButtonContext}