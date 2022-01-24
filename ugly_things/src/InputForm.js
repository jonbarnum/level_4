import React, {useContext} from "react";
import { ButtonContext } from "./buttonContex";

function InputForm(){
    const {inputData, handleChange, handleSubmit} = useContext(ButtonContext)
    return(
        <div>
            <div className="formDiv">
                <form 
                    className="form"
                    onSubmit={handleSubmit}
                >
                    <input
                        type='text'
                        value={inputData.title}
                        name='title'
                        minLength='3'
                        //creating anonymous function that calls setState, ex. setTitle, which is able to obtain the values being written in the input field. ex. (setTitle(event.value))   
                        // onChange={(event) => {
                        //     setTitle(event.value)
                        // }}
                        onChange={handleChange}
                        placeholder='Title'
                        className="inputForm"
                        required
                    />
                    <input
                        type='text'
                        value={inputData.imageURL}
                        name='imageURL'
                        minLength='3'
                        // onChange={(event) => {  
                        //     setImageURL(event.value)
                        // }}
                        onChange={handleChange}
                        placeholder='Image URL'
                        className="inputForm"
                        required
                    />
                    <input
                        type='text'
                        value={inputData.description}
                        name='description'
                        minLength='3'
                        // onChange={(event) => {
                        //     setDescription(event.value)
                        // }}
                        onChange={handleChange}
                        placeholder='Description'
                        className="inputForm"
                        required
                    />
                    <div className="buttonDiv">
                        <button 
                            className="submitButton"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default InputForm