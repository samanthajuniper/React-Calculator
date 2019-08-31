import React from 'react';
import { NavLink } from "react-router-dom";

function Navbar () {
 
    return( 
        
        <div className = "navbar">
            <NavLink 
                className = "initialStyles"
                exact
                to="/"
                activeClassName="selected" 
            >
                Home
            </NavLink>

            <NavLink
                className = "initialStyles"
                to="/calculator"
                activeClassName="selected" 
            >
               Calculator
            </NavLink>

            <NavLink
                className = "initialStyles"
                to="/About"
                activeClassName="selected" 
            >
                About
            </NavLink>



        </div>
     )
}

export default Navbar