import React from "react";
import Bulb from "../Images/Bulb.png";
import "../CSS/Form.css";

const FormSuccess = () => {
  return (
    <div className="form-content-right">
      <h1 className="form-success">We have received your request!</h1>
      <img className="form-img-2" src={Bulb} alt="transmit-success" />
    </div>
  );
};

export default FormSuccess;
