import React from "react";
import ReactDOM from "react-dom"
import App from "./App"
import { ButtonContextProvider } from "./buttonContex";

ReactDOM.render(
    <ButtonContextProvider>
        <App/>
    </ButtonContextProvider>,
    document.getElementById('root')
)