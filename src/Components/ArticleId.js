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
        <h1>
          Submit an article by filling the missing pieces!
          <span style={{ color: "#D7BADD" }}>
            {" "}
            (Click on the elements to edit){" "}
          </span>
        </h1>
        <div className="form-inputs">
          <label className="form-label">Title</label>
          <input
            className="form-input"
            type="text"
            name="title"
            defaultValue={article.Title}
            onChange={handleChange}
          />
        </div>

        <div className="form-inputs">
          <label className="form-label">Comment</label>
          <input
            className="form-input"
            type="text"
            name="comment"
            defaultValue={article.Comment}
            onChange={handleChange}
          />
        </div>

        <div className="form-inputs">
          <div className="form-inputs1">
            <div className="form-inputs">
              <label className="form-label">Idea Source</label>
              <input
                className="form-input1"
                type="text"
                name="source"
                defaultValue={article.Journalist}
                onChange={handleChange}
              />
            </div>

            <div className="form-inputs">
              <label className="form-label">Journalist</label>
              <select
                className="form-input1"
                type="text"
                name="journalist"
                onChange={handleChange}
              >
                <option value="" selected disabled hidden>
                  Please Select
                </option>
                <option>LA</option>
                <option>LK</option>
                <option>KA</option>
                <option>LA</option>
                <option>JN</option>
                <option>LP</option>
                <option>CJ</option>
                <option>other</option>
              </select>
            </div>

            <div className="form-inputs">
              <label className="form-label">Photographer</label>
              <select
                className="form-input1"
                type="text"
                name="photogrpaher"
                onChange={handleChange}
              >
                <option value="" selected disabled hidden>
                  Please Select
                </option>
                <option>LI</option>
                <option>PL</option>
                <option>AJ</option>
                <option>MA</option>
                <option>JH</option>
                <option>JN</option>
                <option>other</option>
              </select>
            </div>
          </div>
        </div>

        <div className="form-inputs">
          <label className="form-label">Section</label>
          <select
            className="form-input"
            type="text"
            name="section"
            onChange={handleChange}
          >
            <option value="" selected disabled hidden>
              Please confirm the section: Currently {article.Section}
            </option>
            <option>News</option>
            <option>Sport</option>
            <option>Politics</option>
            <option>Local</option>
            <option>World</option>
            <option>Business</option>
            <option>other</option>
          </select>
        </div>

        <div className="form-inputs">
          <label className="form-label">Work Amount</label>
          <select
            className="form-input"
            type="text"
            name="size"
            onChange={handleChange}
          >
            <option value="" selected disabled hidden>
              Please select the work amount:
            </option>
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
          </select>
        </div>

        <div className="form-inputs">
          <label className="form-label">Current State</label>
          <select
            className="form-input"
            type="text"
            name="size"
            onChange={handleChange}
          >
            <option value="" selected disabled hidden>
              Please select the current state of work:
            </option>
            <option>P</option>
            <option>A</option>
            <option>D</option>
            <option>C</option>
          </select>
        </div>

        <div className="form-inputs">
          <label className="form-label">Deadline Date</label>
          <input
            className="form-input"
            type="date"
            name="deadline"
            defaultValue={newArticle.deadline}
            onChange={handleChange}
          />
        </div>

        <button className="form-input-btn" type="submit">
          Submit Article
        </button>
        <span className="form-input-login">
          You changed your mind about the article? Go <a href="#">back</a>
        </span>
      </form>
    </div>
  );
}
