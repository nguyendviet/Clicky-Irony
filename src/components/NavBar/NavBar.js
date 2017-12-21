import React from 'react';
import './NavBar.css';

const NavBar = props => (
    <nav className="navbar navbar-toggleable-sm  navbar-inverse bg-primary fixed-top">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="/"><b>Clicky Game</b></a>
    
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
            <li className="nav-item mr-3">
                <i>Click an image to begin!</i>
            </li>
            <li className="nav-item">
                Score: {props.count}
            </li>
        </ul>
        </div>
    </nav>
);

export default NavBar;