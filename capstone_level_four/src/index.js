import React from "react";
import ReactDom from 'react-dom'
import App from "./App";
import {  ButtonContextProvider } from "./buttonContext";
import { BrowserRouter as Router } from "react-router-dom";

ReactDom.render(
    <ButtonContextProvider>
        <Router>
            <App />
        </Router>
    </ButtonContextProvider>,
    document.getElementById('root')
)