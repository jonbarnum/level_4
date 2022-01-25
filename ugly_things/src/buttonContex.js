import React, {useState} from "react";
// import axios, { Axios } from "axios";
import Axios_post from "./Axios_post";

const ButtonContext = React.createContext()
// let idIncrementor = 0

function ButtonContextProvider(props){
    const [previewActive, setPreviewActive] = useState(false)
    const [savedUglyPics, setSavedUglyPics] = useState([])
    const [inputData, setInputData] = useState({ 
        title: '',
        imgUrl: '',
        description: '',
        id: '',
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
        // idIncrementor++;
        setPreviewActive(false);
        // const newInputData = {
        //     id: idIncrementor,
        //     title: '',
        //     imgUrl: '',
        //     description: '',
        //     editState: {
        //         title: '',
        //         description: ''
        //     }
        // };
        // const newUglyPic = inputData;

        setLoading(true)
        Axios_post(inputData, setLoading, setSavedUglyPics, setInputData)
        // axios.post('https://api.vschool.io/jonathanbarnum/thing', newUglyPic)
        //     .then(response => {
        //         setInputData((prevState) => ({
        //                 ...prevState,
        //                 title: '',
        //                 imgUrl: '',
        //                 description: '',
        //                 newInputData
        //             }));
        //             setSavedUglyPics((prevState) => ([
        //                 ...prevState,
        //                 newUglyPic
        //             ]));
        //             console.log(response.data);
        //             setLoading(false)
        //         })
        //     .catch(error => 
        //         console.log(error),
        //         setLoading(false)
        //         )
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
                handleDelete,
                loading
            }}
        >
            {props.children}
        </ButtonContext.Provider>
    )
}

export {ButtonContextProvider, ButtonContext}
