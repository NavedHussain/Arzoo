// import React, { useState } from "react";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import { contactConfig } from "./contact_option"
// import { Container } from "postcss";
import "./style.css"

function Contact () {
    return (
        <Container className="pt-[100px]">
            <Row classname="mb-5 mt-3">
                <Col lg='8'>
                    <h1 className="display-4 mb-4">
                        Contact Me
                    </h1>
                </Col>
            </Row>


            <Row classname="sec-sp">
                <Col lg='5' className="mb-5">
                    <h3 className="color_drc py-4">Get in touch</h3>
                    <address>
                        <strong>Email : developer@javascript.com</strong>
                        <br />
                        <br />
                        <p>
                            <strong>phone : +91 7987590472</strong>

                        </p>
                    </address>
                    {/* <p>{contactConfig.description}</p> */}
                </Col>
                <Col lg='7' className='d-flex align-items-center'>
                    <form className="contact__from w-100">

                        <Row>
                            <Col lg='6' className='force-group'>
                                <input
                                    className="form-control"
                                    id="name"
                                    name="name"
                                    placeholder="Name"
                                    type="text"
                                />

                            </Col>
                            <Col lg='6' className='force-group'>
                                <input
                                    className="form-control rounded-0"
                                    id="email"
                                    name="email"
                                    placeholder="Email"
                                    type="email"
                                />
                            </Col>
                        </Row>
                        <textarea className="form-control rounded-0" id="message"
                            placeholder="Message"
                            rows='5'
                        ></textarea>
                        <br />
                        <Row>
                            <Col lg='12' className="form-group">
                                <button className="btm ac_btm" type="submit"></button>

                            </Col>
                        </Row>
                    </form>
                </Col>
            </Row>
        </Container >
    );
}

export default Contact