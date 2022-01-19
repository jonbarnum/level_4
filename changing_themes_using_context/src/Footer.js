import React, { useContext } from "react";
import {ThemeContext} from './themeContext'

function Footer(props){
    const {theme} = useContext(ThemeContext)
    return(
        <div className={`footerDiv ${theme}HeaderFooter ${theme}HeaderFooter`}>
            <h3 className="footer">This is a footer!!!</h3>
        </div>
    )
}

export default Footer