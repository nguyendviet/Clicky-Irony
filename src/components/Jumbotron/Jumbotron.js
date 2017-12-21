import React from 'react';
import './Jumbotron.css';

const Jumbotron = () => (
    <div className="jumbotron jumbotron-fluid text-center">
        <div className="container">
            <h1 className="display-3">Clicky Game</h1>
            <p className="lead">Click images to earn points, but don't click on an image more than once.</p>
        </div>
    </div>
);

export default Jumbotron;
