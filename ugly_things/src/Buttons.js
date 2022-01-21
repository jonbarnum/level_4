import React, {useContext} from "react";
import { ButtonContext } from "./buttonContex";

function Buttons(){
    const {previewActive, preview} = useContext(ButtonContext)
    return(
        <div>
            <div className="buttonDiv">
                <button 
                    className="button"
                    onClick={preview}
                >
                    Preview
                </button>
                <button className="button">Submit</button>
            </div>
            <div>
                {previewActive ? (<h1>hello</h1>) : null}
            </div>
        </div>
    )
}

export default Buttons