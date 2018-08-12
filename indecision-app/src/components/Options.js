import React from 'react';
import Option from './Option';

const Options = (props) => (
        <div>
            <button onClick={props.handleRemoveAll} disabled={props.options.length == 0}>Remove All</button>
            {props.options.length == 0 && <p>Please add an option to get Started!</p>}
            {props.options.map((option) => 
                <Option 
                    key={option} 
                    optionText={option}
                    remove = {props.handleRemove}/>)}
        </div>
    );

export default Options;
