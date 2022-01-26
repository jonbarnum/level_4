import React, {useContext, useEffect} from "react";
import { ButtonContext } from "./buttonContex";
import Axios_get from "./Axios_get";
import axios from "axios";

function Buttons(){
    const {
        previewActive, 
        preview,
        inputData,
        savedUglyPics,
        handleEditClick,
        handleEditText,
        handleEditSubmit,
        handleDelete,
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

        axios.get('https://api.vschool.io/jonathanbarnum/thing').then((response) => {
            setSavedUglyPics(response.data)
        })
        .catch((error) => console.log(error))
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
                {savedUglyPics.map((savedUglyPic, index) => {
                    return(
                        <div key={index} id={savedUglyPic._id} className="savedImgDiv">
                            <div>
                                <h1>{savedUglyPic.title}</h1>
                                <h2>{savedUglyPic.description}</h2>
                                <img
                                    className="image"
                                    src={savedUglyPic.imgUrl}
                                    alt="user img"
                                />
                            </div>
                            <div>
                                <button onClick={() => handleEditClick(index, savedUglyPic._id)}>Edit</button>
                            </div>
                            <div>
                            {/* savedUglyPic && savedUglyPic.editState && savedUglyPic.editState.editActvie */}
                                {savedUglyPic?.editState?.editActive ? (
                                    <div>
                                        <form onSubmit={(event) => handleEditSubmit(event, index, savedUglyPic._id)}>
                                            <input
                                                type='text'
                                                value={savedUglyPic.editState.title}
                                                name='title'
                                                minLength='3'
                                                onChange={(event) => handleEditText(event, index, savedUglyPic._id)}
                                                placeholder='Title'
                                                className="inputForm"
                                                required
                                            />
                                            <input
                                                type='text'
                                                value={savedUglyPic.editState.description}
                                                name='description'
                                                minLength='3'
                                                onChange={(event) => handleEditText(event, index, savedUglyPic._id)}
                                                placeholder='Description'
                                                className="inputForm"
                                                required
                                            />
                                            <div>
                                                <button onClick={(event) => handleDelete(event, index)}>Delete</button>
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
