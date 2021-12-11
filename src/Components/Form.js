import React, { useState } from "react";
import "../CSS/Form.css";
import { getArticles } from "../DatabaseInteraction/db";
import AddIdea from "./AddArticle";
import FormSuccess from "./FormSuccess";
import Idea from "../Images/Bulb.png";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className="form-container">
        <div className="form-content-left">
          <img className="form-img" src={Idea} alt="news icon" />
        </div>
        {!isSubmitted ? <AddIdea submitForm={submitForm} /> : <FormSuccess />}
      </div>
    </>
  );
};

export default Form;
