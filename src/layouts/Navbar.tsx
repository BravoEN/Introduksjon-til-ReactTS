import React from "react";
import "./Layout.css";
import {Link} from "react-router-dom";

export default function Navbar() {
    return(
        <nav className="navbar">
            <ul className="navbar-links">
                <li><Link to="/" className="navbar-links">Home</Link></li>
                <li><Link to="/Components">Components</Link></li>
                <li><Link to="/Oppg1">Oppg1</Link></li>
                <li><Link to="/Oppg2">Oppg2</Link></li>
            </ul>
        </nav>
    )
}