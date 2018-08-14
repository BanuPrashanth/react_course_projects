import React from 'react';

const PortfolioItem = (props) => {
    console.log(props)
    return (
        <div>
            <p>Id of the page {props.match.params.id}</p>
        </div>
    );
    
};

export default PortfolioItem;
