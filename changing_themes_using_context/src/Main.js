import React, { useContext } from "react";
import {ThemeContext} from './themeContext'

function Main(){
    const {theme, themeToggle} = useContext(ThemeContext)
    return(
        <div className={`main ${theme}Main ${theme}Main`}>
            <div className="mainParagraphDiv">
                <p className="mainBodyParagraph">Click the button to toggle the {theme === 'light' ? 'dark' : 'light'} theme!</p>
            </div>
            <div className="buttonDiv ">
                <button 
                    className={`mainButton ${theme}HeaderFooter ${theme}HeaderFooter`}
                    onClick={themeToggle}
                >
                    Toggle theme
                </button>
            </div>
        </div>
    )
}

export default Main