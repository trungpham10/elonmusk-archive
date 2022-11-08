import React from "react";
import './App.css';
import { IconButton } from "@mui/material";
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

export default function Quote(props) {
    return (
        <div className="quote">
            <div className="quote-text">
                <div>"{props.text}"</div>
            </div>
            <IconButton 
                onClick={()=>{
                    props.setShow(true);
                    props.setModalUrl(props.url);
                }}>
                {props.url && <RocketLaunchIcon fontSize="medium"/>}
            </IconButton>
        </div>
    );
}