import React, {useContext, useEffect} from "react";
import { ButtonContext } from "./buttonContex";
import Axios_get from "./Axios_get";
import NewTest from "./NewTest";

function Buttons(){
    const {
        previewActive, 
        preview,
        inputData,
        savedUglyPics,
        loading,
        setSavedUglyPics
    } = useContext(ButtonContext)

    useEffect(() => {
        // Axios_get().then((response) => {})//correct way example but this is coming in from Axios_get component
        // const returnedPromise = Axios_get()//correct way example but this is coming in from Axios_get component
        // returnedPromise.then(()=>{})

        // const returnedPromise = Axios_get() //correct way example but this is coming in from Axios_get component
        // returnedPromise.then((response) => {
        //     setSavedUglyPics(response.data)
        // })
        // Axios_get().then((response) => { //correct way example but this is coming in from Axios_get component
        //     setSavedUglyPics(response.data)
        // })
        Axios_get(setSavedUglyPics)
    }, [])

    return(
        <div>
            <div className="buttonDiv">
                <button 
                    className="button"
                    onClick={preview}
                >
                    Preview
                </button>
            </div>
            <div className="previewDiv">
                {previewActive ? (
                    <h1>
                        {inputData.title}
                    </h1>
                ) : null}
                {previewActive ? (
                    <h2>
                        {inputData.description}
                    </h2>
                ) : null}
                {previewActive ? (
                    <img
                        className="image"
                        src={inputData.imgUrl}
                        alt="user img"
                    />
                ) : null}
            </div>
            <div>
                {loading ? (
                    <h1>Loading!!!</h1>
                ): null}
            </div>
            <div>
                {savedUglyPics.map((savedUglyPic, index) => (
                    <NewTest savedUglyPic={savedUglyPic} index={index} />
                ))}
            </div>
        </div>
    )
}

export default Buttons
