import React, {useContext} from "react";
import { ButtonContext } from "./buttonContex";

function Buttons(){
    const {previewActive, preview, inputData, savedUglyPics} = useContext(ButtonContext)

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
                        src={inputData.imageURL}
                        alt="user img"
                    />
                ) : null}
            </div>
            <div>
                {savedUglyPics.map((savedUglyPic) => {
                    return(
                        <div className="savedImgDiv">
                            <div>
                                <h1>{savedUglyPic.title}</h1>
                                <h2>{savedUglyPic.description}</h2>
                                <img
                                    className="image"
                                    src={savedUglyPic.imageURL}
                                    alt="user img"
                                />
                            </div>
                            <div>
                                <button>Edit</button>
                                <button>Delete</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Buttons
