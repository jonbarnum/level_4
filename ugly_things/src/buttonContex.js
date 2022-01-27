import React, {useState} from "react";
import Axios_post from "./Axios_post";
import Axios_put from "./Axios_put";
import Axios_delete from "./Axios_delete";
import Axios_get from "./Axios_get";

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
        setPreviewActive(prevPreview => !prevPreview)
    }
    
    function handleChange(event){
        event.preventDefault();
        const {name, value} = event.target;
        setInputData(prevData => ({...prevData, [name]: value}))
    }

    async function handleSubmit(event){
        event.preventDefault();

        setPreviewActive(false);
        setLoading(true)
        await Axios_post(inputData, setLoading, setSavedUglyPics, setInputData)
        Axios_get(setSavedUglyPics)
    }

    function handleEditClick(index, _id){
        const savedImage = savedUglyPics.find((savedUglyPic) => savedUglyPic._id === _id)
        savedImage.editState = savedImage.editState || {}
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

    function handleEditSubmit(event, index, _id){
        event.preventDefault()
        setLoading(true)
        Axios_put(savedUglyPics, setSavedUglyPics, setLoading, _id, index)
    }

    function handleDelete(event, index, _id){
        event.preventDefault()
        Axios_delete(setSavedUglyPics, setLoading, savedUglyPics, index, _id)
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
