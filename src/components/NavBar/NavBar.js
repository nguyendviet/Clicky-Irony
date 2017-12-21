import React from 'react';
import './NavBar.css';

const NavBar = props => (
    <ul className="nav justify-content-center fixed-top">
        <li className="nav-item">
            <a href="/"><b>Clicky Game</b></a>
        </li>
        <li className="nav-item">
            <p>{props.message ? props.message : `Click an image to begin`}</p>
        </li>
        <li className="nav-item">
            <p>Score: {props.count} | Top Score: {props.topScore}</p>
        </li>
    </ul>
);

export default NavBar;