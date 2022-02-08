import React, {useState, useEffect} from "react";
import axios from "axios";

const ButtonContext = React.createContext()

function ButtonContextProvider(props){
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get("https://lldev.thespacedevs.com/2.2.0/launch/upcoming/")
        .then(response => {
            setData(response.data.results)
        })
        .catch(error => console.log(error))
    }, [])


    return(
        <ButtonContext.Provider value={{
            data
        }}>
            {props.children}
        </ButtonContext.Provider>
    )
}

export {ButtonContextProvider, ButtonContext}