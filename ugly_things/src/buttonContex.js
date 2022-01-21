import React, {useState} from "react";
const ButtonContext = React.createContext()

function ButtonContextProvider(props){
    const [previewActive, setPreviewActive] = useState(false)
    const [savedUglyPics, setSavedUglyPic] = useState([])

    //setting each variable using useState
    // const [title, setTitle] = useState('');
    // const [imageURL, setImageURL] = useState('');
    // const [description, setDescription] = useState('');

    //this is another way to create state and then use then handle function to get the data coming into the value field

    const [inputData, setInputData] = useState({ 
        title: '',
        imageURL: '',
        description: '',
        id: ''
    })

    function preview(event){
        event.preventDefault();
        setPreviewActive(prevPreview => prevPreview === true ? false : true)
    }
    
    function handleChange(event){
        event.preventDefault();
        const {name, value} = event.target;
        setInputData(prevData => ({...prevData, [name]: value}))
    }

    function handleSubmit(event){
        event.preventDefault()
        setPreviewActive(false)
        setInputData({
            title: '',
            imageURL: '',
            description: ''
        })
        setSavedUglyPic(prevUglyPic => ([...prevUglyPic, inputData]))
    }

    return(
        <ButtonContext.Provider value={{
            previewActive, 
            preview, 
            inputData, 
            handleChange, 
            savedUglyPics, 
            handleSubmit}}
        >
            {props.children}
        </ButtonContext.Provider>
    )
}

export {ButtonContextProvider, ButtonContext}
