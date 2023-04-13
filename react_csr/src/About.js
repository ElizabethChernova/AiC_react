import React from 'react';
import {NavLink} from "react-router-dom";

function About() {
    return (

        <div>
            <p>
                About
            </p><NavLink to={'/'} id="nav-link-block"
                         className={({isActive}) => (isActive ? "active-orange" : "noactive")}>
            <p id="main">Main</p>
        </NavLink>
            <NavLink to={'/about'} id="nav-link-block"
                     className={({isActive}) => (isActive ? "active-orange" : "noactive")}>
                <p id="about">About</p>
            </NavLink>
        </div> );
}

export default About;
