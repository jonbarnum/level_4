import React, { useContext } from "react";
import {ThemeContext} from './themeContext'

function Header(){
    const {theme} = useContext(ThemeContext)
    return(
        <span className={`header ${theme}HeaderFooter ${theme}HeaderFooter`}>
            <h1>Home</h1>
            <h1>About</h1>
            <h1>Contact</h1>
        </span>
    )
}

export default Header