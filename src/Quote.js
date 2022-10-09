import React from "react";
import './App.css';

export default function Quote(props) {
    return (
        <div className="quote">
            <div className="quote-video">video</div>
            <div className="quote-text">{props.text}</div>
            <div className="expand-button">button</div>
        </div>
    );
}