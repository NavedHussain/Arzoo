import React from "react";
import "./style.css"
import { NavLink } from "react-router-dom";

const LandingPage = () => {
    return (
        <>
            <div className="Landing-wrapper">
                LandingPage
                <button className="">
                    <NavLink to={"/login"} >Login</NavLink>
                </button>
            </div>

        </>
    )
}

export default LandingPage