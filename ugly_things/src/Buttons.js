import React, {useContext} from "react";
import { ButtonContext } from "./buttonContex";

function Buttons(){
    const {previewActive, preview, inputData, savedUglyPics, editActive, handleEditClick} = useContext(ButtonContext)

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
                {savedUglyPics.map((savedUglyPic, index) => {
                    return(
                        <div key={index} id={index} className="savedImgDiv">
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
                                <button onClick={handleEditClick}>Edit</button>
                            </div>
                            <div>
                                {editActive ? (
                                    <div>
                                        <form>
                                            <input
                                                type='text'
                                                value={inputData.title}
                                                name='title'
                                                minLength='3'
                                                // onChange={handleChange}
                                                placeholder='Title'
                                                className="inputForm"
                                                required
                                            />
                                            <input
                                                type='text'
                                                value={inputData.description}
                                                name='description'
                                                minLength='3'
                                                // onChange={handleChange}
                                                placeholder='Description'
                                                className="inputForm"
                                                required
                                            />
                                            <div>
                                                <button>Delete</button>
                                                <button>Submit</button>
                                            </div>
                                        </form>
                                    </div>
                                ): null}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Buttons
