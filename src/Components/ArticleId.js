import { getArticle, getArticles } from "../DatabaseInteraction/db";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Spinner from "react-bootstrap/Spinner";
import { useParams } from "react-router-dom";
import "../App.css";
import Popup from "./Popup";

export default function () {
  const [article, setArticle] = useState();

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

  return (
    //TODO: take component out and add information via prop
    <div className="background--box">
      <form>
        <ul className="form--list">
          <li className="form--row">
            <label>Title</label>
            <input
              type="title"
              placeholder={article.Title}
              name="title"
              value={article.Title}
            />
          </li>
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
        </ul>
      </form>
    </div>
  );
}
