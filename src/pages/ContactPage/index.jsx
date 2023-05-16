import React, { useState } from "react";
// import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import { contactConfig } from "./contact_option"
// import { Container } from "postcss";
import "./style.css"

function Contact() {
    return (
        <div className="min-h-[100vh] max-w-[1440px] pt-[100px] flex flex-col gap-5 items-center justify-center p-[3rem] bg-[#272727] text-white">
            <div className="flex w-full">
                <h1 className="md:text-5xl text-3xl">Contact Me</h1>
            </div>
            <div className="flex md:flex-row flex-col items-center gap-10">
                <div className="flex flex-col md:w-1/3 gap-2">
                    <h3 className="text-2xl">Get In Touch</h3>
                    <p className="font-semibold">Email: navedhussain1803@gmail.com</p>
                    <p className="font-semibold">Phone: +917987590472</p>
                    <p className="">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam eaque, rem sequi, voluptatibus alias velit saepe repellat sit facilis minima totam rerum odit, repellendus ad.
                    </p>
                </div>
                <div className="flex flex-col input-text-field md:w-2/3 gap-5">
                    <div className="flex flex-col md:flex-row gap-5 w-full">
                        <input type="text" placeholder=" Name" />
                        <input type="text" placeholder=" Email" />
                    </div>
                    <textarea name="message" rows="8" cols="30" placeholder=" Message"></textarea>
                </div>
            </div>
            <div className="flex items-center justify-center w-full ">
                <button className="border-2 border-[#cecece] text-[#cecece] px-3 py-2 ">Send</button>
            </div>
        </div>
    )
}

export default Contact