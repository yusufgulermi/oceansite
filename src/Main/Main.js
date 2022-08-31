import "../App.css"
import Logo from "./Logo";
import SideFooter from "./SideFooter";
import Bubble from "./Bubble";
import React from "react";
import { Link } from "react-router-dom"

function Main() {

    return (
        <div className="main-body">
            <Logo />
            <Link to="/signUp"><button id="signUp">Sign Up</button></Link>
        
            <SideFooter />
            <div className="content">
                <p>Welcome to our</p>
                <h1>Ocean's <br /> Creative Site!</h1>
                <Link to="/discover"><button>Discover</button></Link>
                
            </div>

            <Bubble />
        </div>
    );
}

export default Main;
