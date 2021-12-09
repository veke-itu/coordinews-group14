import { getArticles } from "../DatabaseInteraction/db";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Spinner from "react-bootstrap/Spinner";
import "../App.css";
import Popup from "./Popup";

export default function () {
  const [Articles, setArticles] = useState();

  useEffect(() => {
    getArticles().then((Articles) => {
      const articlesMapped = Articles.map((wrapper) => {
        const mappedArticle = {
          ArticleId: wrapper.id,
          Title: wrapper.attributes.Title,
          Section: wrapper.attributes.Section,
          Journalist: wrapper.attributes.Journalist,
          Photographer: wrapper.attributes.Photographer,
          State: wrapper.attributes.State,
          Size: wrapper.attributes.Size,
          Deadline: wrapper.attributes.Deadline,
        };
        /** Add Article is not connected to database anymore .toString().slice(4, 15) */

        return mappedArticle;
      });

      setArticles(articlesMapped);
    });
  }, []);

  if (!Articles) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  const distinctArticle = Object.values(Articles).filter((article) => {
    return article.ArticleId.includes("4FJgD0ERx7");
  });

  console.log("Check the Articles: ", distinctArticle);

  return (
    //TODO: take component out and add information via prop
    <div className="background--box">
      <form>
        <ul className="form--list">
          <li className="form--row">
            <label>Title</label>
            <input
              type="title"
              placeholder={distinctArticle[0].Title}
              name="title"
              value={distinctArticle[0].Title}
            />
          </li>
          <li className="form--row">
            <label>Comment</label>
            <input
              type="text"
              placeholder={distinctArticle[0].Comment}
              name="comment"
              value={distinctArticle[0].Comment}
            />
          </li>

          <li className="form--row">
            <label>Journalist</label>
            <input
              type="text"
              placeholder={distinctArticle[0].Journalist}
              name="journalist"
              value={distinctArticle[0].Journalist}
            />
          </li>

          <li className="form--row">
            <label>Photographer</label>
            <input
              type="text"
              placeholder={distinctArticle[0].Photographer}
              name="photographer"
              value={distinctArticle[0].Photographer}
            />
          </li>

          <li className="form--row">
            <label>Section</label>
            <input
              type="text"
              placeholder={distinctArticle[0].Section}
              name="section"
              value={distinctArticle[0].Section}
            />
          </li>

          <li className="form--row">
            <label>Size</label>
            <input
              type="text"
              placeholder={distinctArticle[0].Size}
              name="size"
              value={distinctArticle[0].Size}
            />
          </li>

          <li className="form--row">
            <label>State</label>
            <input
              type="text"
              placeholder={distinctArticle[0].State}
              name="state"
              value={distinctArticle[0].State}
            />
          </li>

          <li className="form--row">
            <label>Date</label>
            <input
              type="text"
              placeholder={distinctArticle[0].Deadline}
              name="date"
              value={distinctArticle[0].Deadline}
            />
          </li>
        </ul>
      </form>
    </div>
  );
}
