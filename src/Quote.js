import React from "react";
import './App.css';

export default function Quote(props) {
    return (
        <div className="quote">
            <div className="quote-text">
                <a href={props.url} target="_blank" rel="noopener noreferrer">{props.text}</a>
            </div>
        </div>
    );
}