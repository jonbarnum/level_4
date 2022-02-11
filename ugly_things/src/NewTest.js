import React, {useContext} from "react";
import { ButtonContext } from "./buttonContex";


function NewTest({savedUglyPic, index}){
    const {
        handleEditClick,
        handleEditText,
        handleEditSubmit,
        handleDelete,
    } = useContext(ButtonContext)
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
                                <button onClick={(event) => handleDelete(event, index, savedUglyPic._id)}>Delete</button>
                                <button>Submit</button>
                            </div>
                        </form>
                    </div>
                ): null}
            </div>
        </div>
    )
}

export default NewTest