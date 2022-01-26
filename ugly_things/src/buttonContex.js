// import { Axios } from "axios";
import React, {useState} from "react";
import Axios_post from "./Axios_post";
import Axios_put from "./Axios_put";

const ButtonContext = React.createContext()

function ButtonContextProvider(props){
    const [previewActive, setPreviewActive] = useState(false)
    const [savedUglyPics, setSavedUglyPics] = useState([])
    const [inputData, setInputData] = useState({ 
        title: '',
        imgUrl: '',
        description: '',
        _id: '',
        editState: {
            title: '',
            description: '',
            editActive: false,
        }
    })
    const [loading, setLoading] = useState(false)

    function preview(event){
        event.preventDefault();
        setPreviewActive(prevPreview => prevPreview = !prevPreview)
    }
    
    function handleChange(event){
        event.preventDefault();
        const {name, value} = event.target;
        setInputData(prevData => ({...prevData, [name]: value}))
    }

    function handleSubmit(event){
        event.preventDefault();

        setPreviewActive(false);
        setLoading(true)
        Axios_post(inputData, setLoading, setSavedUglyPics, setInputData)
    }

    function handleEditClick(index, _id){
        const savedImage = savedUglyPics.find((savedUglyPic) => savedUglyPic._id === _id)
        savedImage.editState.editActive = !savedImage.editState.editActive
        // [1,2,3,4]
        // 3 -> 7
        setSavedUglyPics((prevState) => ([
            ...prevState.slice(0, index), //[1,2]
            savedImage, // 7
            ...prevState.slice(index + 1) //[4]
        ]))
        // [
        //     ...[1,2],
        //     7,
        //     ...[4]
        // ] //[1, 2, 7, 4]
        console.log(savedImage)
    }


    function handleEditText(event, index, _id){
        const savedImage = savedUglyPics.find((savedUglyPic) => savedUglyPic._id === _id)
        savedImage.editState[event.target.name] = event.target.value
        
        setSavedUglyPics((prevState) => ([
            ...prevState.slice(0, index),
            savedImage,
            ...prevState.slice(index + 1)
        ]))
    }

    function handleEditSubmit(event){
        event.preventDefault()
        setLoading(true)
        Axios_put(savedUglyPics, setSavedUglyPics, setLoading)
        // const savedImage = savedUglyPics.find((savedUglyPic) => savedUglyPic._id === _id)
        // savedImage.title = savedImage.editState.title
        // savedImage.description = savedImage.editState.description

        // setSavedUglyPics((prevState) => ([
        //     ...prevState.slice(0, index),
        //     savedImage,
        //     ...prevState.slice(index + 1)
        // ]))
    }

    function handleDelete(event, index){
        event.preventDefault()
        setSavedUglyPics((prevState) => ([
            ...prevState.slice(0, index),
            ...prevState.slice(index + 1)
        ]))
    }

    return(
        <ButtonContext.Provider value={{
                previewActive, 
                preview, 
                inputData, 
                handleChange, 
                savedUglyPics, 
                handleSubmit,
                handleEditClick,
                handleEditText,
                handleEditSubmit,
                handleDelete,
                loading,
                setSavedUglyPics
            }}
        >
            {props.children}
        </ButtonContext.Provider>
    )
}

export {ButtonContextProvider, ButtonContext}
