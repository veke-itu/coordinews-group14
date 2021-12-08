import React from "react";
import { FaRegWindowClose } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

import "../App.css";

export default function Popup(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <FaRegWindowClose
          className="close-btn"
          onClick={() => props.setTrigger(false)}
        />
        {/* <button className="close-btn" onClick={() => props.setTrigger(false)}> */}
        {/* Close */}
        {/* </button> */}
        <FaCheck className="check--pop" />
        <button className="OK-btn">Take me to Articles</button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}
