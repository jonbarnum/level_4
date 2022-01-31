import React from "react";
import {Link} from "react-router-dom"



function Header(){
    return(
        <div className="navBarDiv">
            <nav className="navBar">
                <div>
                    <Link to='/home' className="link">Home</Link>
                </div>
                <div>
                    <Link to='about' className="link">About</Link>
                </div>
                <div>
                    <Link to='services' className="link">Services</Link>
                </div>
            </nav>
        </div>
    )
}

export default Header 