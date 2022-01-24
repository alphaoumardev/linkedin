import React from 'react';
import '../css/options.css'

const Options = ({title, Icon,color}) => 
{
    return (
        <div className="options">
            <Icon style={{ color: color }}/>
            <h4>{title}</h4>
        </div>
    );
}

export default Options;
