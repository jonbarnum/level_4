import React, {useState} from "react";

function InputForm(){
    //setting each variable using useState
    const [title, setTitle] = useState('');
    const [imageURL, setImageURL] = useState('');
    const [description, setDescription] = useState('');

    //this is another way to create state and then use then handle function to get the data coming into the value field

    // const [inputData, setInputData] = useState( 
    //     imageURL: '',
    //     descritpion: ''
    // })

    // function handleChange(event){
    //     event.preventDefault();
    //     const {name, value} = event.target;
    //     setInputData(prevData => ({...prevData, [name]: value}))
    // }
    console.log(title)
    return(
        <div className="formDiv">
            <form className="form">
                <input
                    type='text'
                    value={title}
                    name='title'
                    minLength='3'
                    //creating anonymous function that calls setState, ex. setTitle, which is able to obtain the values being written in the input field. ex. (setTitle(event.value))   
                    onChange={(event) => {
                        setTitle(event.value)
                    }}
                    placeholder='Title'
                    className="inputForm"
                    required
                />
                <input
                    type='text'
                    value={imageURL}
                    name='imageURL'
                    minLength='3'
                    onChange={(event) => {
                        setImageURL(event.value)
                    }}
                    placeholder='Image URL'
                    className="inputForm"
                    required
                />
                <input
                    type='text'
                    value={description}
                    name='descritpion'
                    minLength='3'
                    onChange={(event) => {
                        setDescription(event.value)
                    }}
                    placeholder='Descitpion'
                    className="inputForm"
                    required
                />
            </form>
        </div>
    )
}

export default InputForm