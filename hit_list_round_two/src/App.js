import React, { useState, useEffect } from "react";
import './stylesheet.css'

function App() {
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json')
        .then(response => response.json())
        .then(data => {
            setCharacters(data)
        })
    })

    return(
        <div>
            <h1>Hit List</h1>
            {characters.map(character => (
                <div>
                    <h1>{character.name}</h1>
                    <img className={'img'} src={character.image} alt='character name'/>
                </div>
                
            ))}
        </div>
    )
}

export default App; 