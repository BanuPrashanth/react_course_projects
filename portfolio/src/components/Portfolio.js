import React from 'react';
import {Link} from 'react-router-dom';

const Portfolio = (props) => (
    <div>
        <p>Main Portfoilo with items</p>
        <Link to="/portfolio/1">Item One</Link>
        <Link to="/portfolio/2">Item Two</Link>
    </div>
);

export default Portfolio;
