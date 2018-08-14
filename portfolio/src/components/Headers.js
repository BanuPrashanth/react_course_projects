import React from 'react';
import {NavLink} from 'react-router-dom';

const Headers = () => (
    <div>
        <header>
            <h1>PORTFOLIO</h1>
        </header>
        <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
        <NavLink to="/portfolio" activeClassName="is-active">Portfolio</NavLink>
        <NavLink to="/contact"  activeClassName="is-active">Contact</NavLink>
    </div>
);

export default Headers;
