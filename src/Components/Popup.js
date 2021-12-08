import React from "react";
import "../App.css";

export default function Popup(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn" onClick={() => props.setTrigger(false)} >Close</button>
                <button className="OK-btn">Take me to Aticles</button>
                {props.children}
            </div>
        </div>
    ) : "";
}