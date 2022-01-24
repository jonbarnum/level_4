import React, {useState} from "react";
const ButtonContext = React.createContext()
let idIncrementor = 0

function ButtonContextProvider(props){
    const [previewActive, setPreviewActive] = useState(false)
    const [savedUglyPics, setSavedUglyPic] = useState([])
    const [editActive, setEditActive] = useState(false)

    //setting each variable using useState
    // const [title, setTitle] = useState('');
    // const [imageURL, setImageURL] = useState('');
    // const [description, setDescription] = useState('');

    //this is another way to create state and then use then handle function to get the data coming into the value field

    const [inputData, setInputData] = useState({ 
        title: '',
        imageURL: '',
        description: '',
        id: '',
        titleEditText: '',
        descriptionEditText: '',
        editState: {
            title: '',
            description: ''
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

    // function handleSubmit(event){
    //     event.preventDefault()
    //     setPreviewActive(false)
    //     setInputData({
    //         title: '',
    //         imageURL: '',
    //         description: '',
    //     })

    //     setSavedUglyPic(prevUglyPic => ([
    //         ...prevUglyPic, 
    //         inputData
    //     ]))
    //     console.log(inputData)
    // }

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
                title: prevState.titleEditText,
                description: prevState.descriptionEditText
            }
        }))
        setSavedUglyPic(prevUglyPic => ([
            ...prevUglyPic, 
            inputData,
        ]))
        console.log(savedUglyPics)
    }

    function handleEditClick(index, id){
        const savedImage = savedUglyPics.find((image) => image.id === id)
        // savedImage.editState.editActive = !savedImage.editState.editActive
        setEditActive(prevEdit => prevEdit = !prevEdit)
        setSavedUglyPic((prevState) => ({
            ...prevState,
            savedImage: [
                ...prevState.savedImage.slice(0, index),
                savedImage,
                ...prevState.savedImage.slice(index + 1)
            ]
        }))
    }

    // function handleEditText(event, index, id){
    //     const savedImage = setSavedUglyPic.find((image) => image.id === id)
    //     savedImage.

    //     setSavedUglyPic((prevState) => ({
    //         ...prevState,
    //         savedImage: [
    //             ...prevState.savedImage.slice(0, index),
    //             savedImage,
    //             ...prevState.savedImage.slice(index + 1)
    //         ]
    //     }))
    // }

    return(
        <ButtonContext.Provider value={{
                previewActive, 
                preview, 
                inputData, 
                handleChange, 
                savedUglyPics, 
                handleSubmit,
                editActive,
                handleEditClick
            }}
        >
            {props.children}
        </ButtonContext.Provider>
    )
}

export {ButtonContextProvider, ButtonContext}
