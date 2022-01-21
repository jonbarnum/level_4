import React, {useState} from "react";
const ButtonContext = React.createContext()

function ButtonContextProvider(props){
    const [previewActive, setPreviewActive] = useState(false)

    function preview(event){
        event.preventDefault();
        setPreviewActive(prevPreview => prevPreview === true ? false : true)
    }
    

    return(
        <ButtonContext.Provider value={{previewActive, preview}}>
            {props.children}
        </ButtonContext.Provider>
    )
}

export {ButtonContextProvider, ButtonContext}
