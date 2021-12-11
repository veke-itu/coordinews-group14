import { getArticle, getArticles } from "../DatabaseInteraction/db";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Spinner from "react-bootstrap/Spinner";
import { useParams } from "react-router-dom";
import "../App.css";
import Popup from "./Popup";

import { uploadArticle } from "../DatabaseInteraction/db";

export default function () {
  const [article, setArticle] = useState();
  const [articles, setArticles] = useState([]);

  const [newArticle, setNewArticle] = useState({});

  const { articleId } = useParams();
  console.log("Check Params: ", articleId);

  async function getArticleFromDb() {
    const article = await getArticle(articleId);
    setArticle(article);
  }

  useEffect(getArticleFromDb, []);

  useEffect(() => {
    console.log("Use Effect Article:", article);
  }, [article]);

  if (!article) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  // useEffect(() => {
  //   if (articles.length > 0) {
  //     uploadArticle(articles);
  //     // navigate("/");
  //   }
  // }, [articles]);

  function handleChange(event) {
    setNewArticle({
      ...newArticle,
      [event.target.name]: event.target.value,
    });
    console.log("Change ID: ", event.target.value);
  }

  return (
    //TODO: take component out and add information via prop

    <div className="form-content-right">
      <form className="form">
        <h1>Add a new idea by filling out the information below!</h1>
        <div className="form-inputs">
          <label className="form-label">Title</label>
          <input
            contentEditable="true"
            className="form-input"
            type="text"
            placeholder={article.Title}
            name="title"
            defaultValue={article.Title}
            onChange={handleChange}
          />
        </div>

        <li className="form--row">
          <label>Comment</label>
          <input
            type="text"
            placeholder={article.Comment}
            name="comment"
            value={article.Comment}
          />
        </li>

        <li className="form--row">
          <label>Journalist</label>
          <input
            type="text"
            placeholder={article.Journalist}
            name="journalist"
            value={article.Journalist}
          />
        </li>

        <li className="form--row">
          <label>Photographer</label>
          <input
            type="text"
            placeholder={article.Photographer}
            name="photographer"
            value={article.Photographer}
          />
        </li>

        <li className="form--row">
          <label>Section</label>
          <input
            type="text"
            placeholder={article.Section}
            name="section"
            value={article.Section}
          />
        </li>

        <li className="form--row">
          <label>Size</label>
          <input
            type="text"
            placeholder={article.Size}
            name="size"
            value={article.Size}
          />
        </li>

        <li className="form--row">
          <label>State</label>
          <input
            type="text"
            placeholder={article.State}
            name="state"
            value={article.State}
          />
        </li>

        <li className="form--row">
          <label>Date</label>
          <input
            type="text"
            placeholder={article.Deadline}
            name="date"
            value={article.Deadline}
          />
        </li>
      </form>
    </div>
  );
}
