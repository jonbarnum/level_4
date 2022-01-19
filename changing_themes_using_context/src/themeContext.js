import React, {useState} from "react";
const ThemeContext = React.createContext()

function ThemeContextProvider(props){
    const [theme, setTheme] = useState('dark')

    function themeToggle(){
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
    }

    return(
        <ThemeContext.Provider value={{theme, themeToggle}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export {ThemeContextProvider, ThemeContext}
