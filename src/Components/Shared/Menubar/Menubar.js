import React from 'react';
import { NavLink } from 'react-router-dom';
import menuLogo from '../../../resource/logo/menu-logo.png';
import { Navbar, Container, Nav } from "react-bootstrap";
import './Menubar.css';

const Menubar = () => {
    return (
       <div className="menu-main sticky-top">
           <div className="social-icon">
           <a href="https://www.facebook.com/"><i class="fab fa-facebook"></i></a>
           <a href="https://twitter.com/"><i class="fab fa-twitter"></i></a>
           <a href="https://instagram.com/"><i class="fab fa-instagram"></i></a>
           <a href="https://dribbble.com"><i class="fab fa-dribbble"></i></a>
           </div>
            <Navbar expand="lg">
            <Container>
            <Navbar.Brand>
            <img src={menuLogo} width="60" height="60" className="d-inline-block align-top" alt=""/>
            </Navbar.Brand>
                <Navbar.Toggle style={{color : "white"}} aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                <Nav className="ml-auto menu-items">
                    <NavLink style={isActive => ({color: isActive ? "red" : "white"})} to="/home">Home</NavLink>
                    <NavLink style={isActive => ({color: isActive ? "red" : "white"})} to="/explore">Explore</NavLink>
                    <NavLink style={isActive => ({color: isActive ? "red" : "white"})} to="/dashboard">Dashboard</NavLink>
                    <NavLink className="login-button" style={isActive => ({color: isActive ? "red" : "white"})} to="/login">Log-In</NavLink>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
       </div>
    );
};

export default Menubar;