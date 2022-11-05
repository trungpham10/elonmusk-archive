import React from "react";
import './App.css';
import { Button, IconButton } from "@mui/material";
import RocketIcon from '@mui/icons-material/Rocket';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

export default function Quote(props) {
    return (
        <div className="quote">
            <div className="quote-text">
                <a target="_blank" rel="noopener noreferrer">{props.text}</a>
            </div>
            <IconButton 
                onClick={()=>{
                    props.setShow(true);
                    props.setModalUrl(props.url)
                }}>
                <RocketLaunchIcon fontSize="medium"/>
            </IconButton>
        </div>
    );
}