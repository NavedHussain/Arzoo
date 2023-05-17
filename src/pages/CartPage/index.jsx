import React from "react";
import "./style.css"
import { NavLink } from "react-router-dom";

const Cart = () => {
    return (
        <>
            <div className="Landing-wrapper">
                
                <button className="">
                    <NavLink to={"/login"} >Login</NavLink>
                </button>
            </div>

        </>
    )
}

export default Cart