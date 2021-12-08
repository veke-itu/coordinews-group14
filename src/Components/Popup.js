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

        <FaCheck className="check--pop" />
        <a href="/#/articles">
          <button type="submit" className="OK-btn">
            Take me to Articles
          </button>
        </a>
        {/* <button className="OK-btn">Take me to Articles</button> */}
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}
