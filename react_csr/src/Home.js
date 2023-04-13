import {NavLink} from "react-router-dom";
import React from "react";

function Home(props) {
    return (
        <div>
            <p>
                Home
            </p><NavLink to={'/'} id="nav-link-block"
                         className={({isActive}) => (isActive ? "active-orange" : "noactive")}>
            <p id="main">Main</p>
        </NavLink>
            <NavLink to={'/about'} id="nav-link-block"
                     className={({isActive}) => (isActive ? "active-orange" : "noactive")}>
                <p id="about">About</p>
            </NavLink>
        </div>);
}

export default Home;