import React from 'react';
import '../css/headerOptions.css'
import {Avatar} from "@mui/material";


const Headeroptions = ({Icon,title,avatar}) =>
{
    return (
        <div className="headerOptions">
            {Icon && <Icon className="icon"/>}
            {avatar && <Avatar src={avatar} className="avatar"/>}
            <h3 className="title">{title}</h3>
        </div>
    );
}

export default Headeroptions;
