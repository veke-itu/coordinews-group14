import React from "react";
import "../App.css";

export default function Popup(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn">Close</button>
                {props.children}
            </div>
        </div>
    ) : "";
}