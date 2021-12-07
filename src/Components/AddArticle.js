import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { uploadArticle } from "../DatabaseInteraction/db";
import "../App.css";
import Popup from "./Popup";

export default function Upload() {
  const [articles, setArticles] = useState([]);

  const [newArticle, setNewArticle] = useState({});

  const navigate = useNavigate();

  const [buttonPopup, setButtonPopup] = useState(false);

  async function handleUpload(e) {
    e.preventDefault();
    console.log("newa", newArticle);
    setArticles((articles) => [...articles, newArticle]);
  }

  useEffect(() => {
    if (articles.length > 0) {
      console.log(articles);
      uploadArticle(articles);
      navigate("/");
    }
  }, [articles]);

  function handleChange(event) {
    setNewArticle({
      ...newArticle,
      [event.target.name]: event.target.value,
    });
  }

  return (
    //TODO: take component out and add information via prop
    <div className="background--box">
      <form>
        <ul className="form--list">
          <li className="form--row">
            <label>Title</label>
            <input
              type="text"
              placeholder="Title"
              name="title"
              value={newArticle.title}
              onChange={handleChange}
            />
          </li>
          <li className="form--row">
            <label>Comment</label>
            <input
              type="text"
              placeholder="Comment"
              name="comment"
              value={newArticle.comment}
              onChange={handleChange}
            />
          </li>
          <form action="/action_page.php">
            Section <select name="section" id="section" className="dropdown--row">
              <option value={newArticle.section} onChange={handleChange}>Section</option>
            </select>
            <br></br>
            Size <select name="size" id="size" className="dropdown--row">
              <option value={newArticle.size} onChange={handleChange}>Size</option>
            </select>
            <br></br>
            State <select name="state" id="state" className="dropdown--row">
              <option value={newArticle.state} onChange={handleChange}>State</option>
            </select>
            <br></br>
            Journalist <select name="journalist" id="journalist" className="dropdown--row">
              <option value={newArticle.journalist} onChange={handleChange}>Journalist</option>
            </select>
            <br></br>
            Photographer <select name="photographer" id="photographer" className="dropdown--row">
              <option value={newArticle.photographer} onChange={handleChange}>Photographer</option>
            </select>
            <br></br>
          </form>

          <li className="form--row">
            <label>Deadline</label>
            <input
              type="date"
              placeholder="Add Deadline"
              name="deadline"
              value={newArticle.deadline}
              onChange={handleChange}
            />
          </li>

          <br></br>

          <button type="submit" onClick={handleUpload} onClick={() => setButtonPopup(true)} className="form--button">
            Submit Article
          </button>
          <Popup trigger={buttonPopup}>
            <h5>You have succesfully submitted a new article!</h5>
          </Popup>
        </ul>
      </form>
    </div>
  );
}
