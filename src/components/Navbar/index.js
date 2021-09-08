import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";

function Navbar() {
    return (
        <div className="navbar">
            <img src={logo} className="navbar__logo" alt="all tax logo" />
        </div>
    )
}

export default Navbar;