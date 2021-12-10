import React from "react";
import { FaRegWindowClose } from "react-icons/fa";
import { useNavigate } from "react-router";
import { FaCheck } from "react-icons/fa";
import "../App.css";

export default function Popup(props) {

const navigate = useNavigate();

  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <FaRegWindowClose
          className="close-btn"
          onClick={() => props.setTrigger(false)}
        />
        <FaCheck className="check--pop" />
          <button type="submit" className="OK-btn" onClick={() => {navigate("/Articles")}}>
            Take me to Articles
          </button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}
