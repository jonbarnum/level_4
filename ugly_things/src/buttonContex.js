import React, {useState} from "react";
const ButtonContext = React.createContext()
let idIncrementor = 0

function ButtonContextProvider(props){
    const [previewActive, setPreviewActive] = useState(false)
    const [savedUglyPics, setSavedUglyPics] = useState([])
    const [inputData, setInputData] = useState({ 
        title: '',
        imageURL: '',
        description: '',
        id: '',
        editState: {
            title: '',
            description: '',
            editActive: false,
        }
    })

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
        event.preventDefault()
        idIncrementor++
        setPreviewActive(false)
        setInputData((prevState) => ({
            ...prevState,
            id: idIncrementor,
            title: '',
            imageURL: '',
            description: '',
            editState: {
                title: prevState.title,
                description: prevState.description
            }
        }))
        setSavedUglyPics(prevUglyPic => ([
            ...prevUglyPic, 
            inputData,
        ]))
    }

    function handleEditClick(index, id){
        const savedImage = savedUglyPics.find((savedUglyPic) => savedUglyPic.id === id)
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


    function handleEditText(event, index, id){
        const savedImage = savedUglyPics.find((savedUglyPic) => savedUglyPic.id === id)
        savedImage.editState[event.target.name] = event.target.value
        
        setSavedUglyPics((prevState) => ([
            ...prevState.slice(0, index),
            savedImage,
            ...prevState.slice(index + 1)
        ]))
    }

    function handleEditSubmit(event, index, id){
        event.preventDefault()
        const savedImage = savedUglyPics.find((savedUglyPic) => savedUglyPic.id === id)
        savedImage.title = savedImage.editState.title
        savedImage.description = savedImage.editState.description

        setSavedUglyPics((prevState) => ([
            ...prevState.slice(0, index),
            savedImage,
            ...prevState.slice(index + 1)
        ]))
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
                handleDelete
            }}
        >
            {props.children}
        </ButtonContext.Provider>
    )
}

export {ButtonContextProvider, ButtonContext}
