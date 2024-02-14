import React from "react";
import logo from "../img/logo.png";
import { NavLink } from "react-router-dom";
import "./css/nav.css";
const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light text-secondary sticky-top  shadow fixed" style={{backgroundColor:"rgba(255, 255, 255, 0.9)" }}>
        <div className="container-fluid mx-auto ">
            <NavLink className="navbar-brand w-25 p-02" to={"/"}><img className="img-fluid w-50 h-25" src={logo}/></NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto ">
                    <li className="nav-item me-4">
                        <NavLink className="nav-link" style={{color:"#6c131c"}} to={"/"}>Home</NavLink>
                    </li>
                    <li className="nav-item me-4">
                        <NavLink className="nav-link" style={{color:"#6c131c"}} to={"/login"}>Login</NavLink>
                    </li>
                    <li className="nav-item me-4">
                        <NavLink className="nav-link"style={{color:"#6c131c"}} to={"/signup"}>Sign up</NavLink>
                    </li>
                    <li className="nav-item me-4">
                        <NavLink className="nav-link" style={{color:"#6c131c"}}to={"/about"}>About us</NavLink>
                    </li>
                    <li className="nav-item me-4">
                        <NavLink className="nav-link" style={{color:"#6c131c"}}to={"/contact"}>Contact us</NavLink>
                    </li>
                </ul>
                <form className="d-flex">
                    <input className="form-control" type="search" placeholder="Location" aria-label="Search"/>
                </form>
            </div>
        </div>
    </nav>
    </>)
};

export default Navbar;