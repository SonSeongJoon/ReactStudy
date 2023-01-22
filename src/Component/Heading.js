import React, {useState} from "react";
import {Link} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Heading() {
    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Container>
                <Navbar.Brand href="#home">CEO-Community</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                            <Link to ="/" style={{color:"white", textDecoration:"none", marginRight: "10px"}}>Home</Link>
                            <Link to ="/upload" style={{color:"white", textDecoration:"none", marginRight: "10px"}}>Upload</Link>
                            <Link to ="/login" style={{color:"white", textDecoration:"none", marginRight: "10px"}}>Login</Link>
                        <Link to ="/register" style={{color:"white", textDecoration:"none", marginRight: "10px"}}>Register</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default Heading;