import React, { useState } from "react";
import "../CSS/Form.css";
import { getArticles } from "../DatabaseInteraction/db";
import AddIdea from "./AddArticle";
import ArticleId from "./ArticleId";
import FormSuccess from "./FormSuccess";
import Idea from "../Images/Bulb.png";
import "../CSS/Form.css";

const IdeaConverter = () => {
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
        {!isSubmitted ? <ArticleId submitForm={submitForm} /> : <FormSuccess />}
      </div>
    </>
  );
};

export default IdeaConverter;
