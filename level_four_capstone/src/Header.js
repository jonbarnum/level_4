import React from "react";
import { Link } from "react-router-dom";

function Header(){
    return(
        <div className="headerDiv">
            <h1 className="header">
                <Link to='/Launch' className="link">
                    Launches
                </Link>
            </h1>
            <h1 className="header">
                <Link to='/NasaImages' className="link">
                    Nasa Images
                </Link>
            </h1>
            <h1 className="header" >
                <Link to='/FavPictures' className="link">
                    Saved Images
                </Link>
            </h1>
        </div>
    )
}

export default Header 