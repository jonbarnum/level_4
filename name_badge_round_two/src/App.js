import React, {useState} from "react";

function App() {
    const [inputData, setInputData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        placeOfBirth: '',
        phone: '',
        favoriteFood: '',
        yourself: ''
    })
    const [nameCardData, setNameCardData] = useState([])
    
    function handleChange(event){
        event.preventDefault()
            const {name, value} = event.target
            setInputData(prevInputData => ({...prevInputData, [name]: value}))
        }

    function handleSubmit(event){
        event.preventDefault()
        setNameCardData(prevNameCardData => [...prevNameCardData, inputData])
        setInputData({
            firstName: '',
            lastName: '',
            email: '',
            placeOfBirth: '',
            phone: '',
            favoriteFood: '',
            yourself: ''
        })
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type='text'
                        value={inputData.firstName}
                        name='firstName'
                        placeholder='First Name'
                        minLength='3'
                        onChange={handleChange}
                        required
                    />
                    <input
                        type='text'
                        value={inputData.lastName}
                        name='lastName'
                        placeholder='Last Name'
                        minLength='3'
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <input
                        type='text'
                        value={inputData.email}
                        name='email'
                        placeholder='Email'
                        minLength='3'
                        onChange={handleChange}
                        required
                    />
                    <input
                        type='text'
                        value={inputData.placeOfBirth}
                        name='placeOfBirth'
                        placeholder='Place of Birth'
                        minLength='3'
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <input
                        type='tel'
                        pattern='[0-9]+'
                        value={inputData.phone}
                        name='phone'
                        placeholder='10 Digit Phone Number'
                        minLength='10'
                        maxLength='10'
                        onChange={handleChange}
                        required
                    />
                    <input
                        type='text'
                        value={inputData.favoriteFood}
                        name='favoriteFood'
                        placeholder='Favorite Food'
                        minLength='3'
                        onChange={handleChange}
                        required
                    />
                </div>
                <textarea
                        type='text'
                        value={inputData.yourself}
                        name='yourself'
                        placeholder='Tell us about yourself'
                        minLength='3'
                        onChange={handleChange}
                        required
                />
                <br/>
                <button type='submit'>submit</button>
            </form>
            <div>
                {nameCardData.map(newCard => {
                    return(
                        <div>
                            <div className={'badgeHeaderDiv'}>
                                <h1 className={'badgeHeader'}>Badge:</h1>
                            </div>
                            <div>
                                <span className={'badgeSpan'}>
                                    <h2 className={'badgeContent'}>{`Name: ${newCard.firstName} ${newCard.lastName}`}</h2>
                                    <h2 className={'badgeContent'}>{`Phone: ${newCard.phone}`}</h2>
                                </span>
                            </div>
                            <div>
                                <span className={'badgeSpan'}>
                                    <h2 className={'badgeContent'}>{`Place of Birth: ${newCard.placeOfBirth}`}</h2>
                                    <h2 className={'badgeContent'}>{`Favorite Food: ${newCard.favoriteFood}`}</h2>
                                </span>
                            </div>
                            <div>
                                <span className={'badgeSpan'}>
                                    <h2 className={'badgeContent'}>{`Email: ${newCard.email}`}</h2>
                                </span>
                            </div>
                            <div>
                                <p className={'badgeContent aboutYou'}>
                                    {`Tell Us About You: ${newCard.yourself}`}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default App;
