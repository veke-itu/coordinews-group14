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

          <li className="form--row">
            <label>Section</label>
            <input
              type="text"
              placeholder="section"
              name="section"
              value={newArticle.section}
              onChange={handleChange}
            />
          </li>

          <li className="form--row">
            <label>Journalist</label>
            <input
              type="text"
              placeholder="Journalist"
              name="journalist"
              value={newArticle.journalist}
              onChange={handleChange}
            />
          </li>

          <li className="form--row">
            <label>Photographer</label>
            <input
              type="text"
              placeholder="photographer"
              name="photographer"
              value={newArticle.photographer}
              onChange={handleChange}
            />
          </li>

          <li className="form--row">
            <label>Deadline</label>
            <input
              type="date"
              placeholder="date"
              name="deadlinedate"
              value={newArticle.deadlinedate}
              onChange={handleChange}
            />
          </li>

          <li className="form--row">
            <label>Deadline</label>
            <input
              type="text"
              placeholder="deadline"
              name="deadline"
              value={newArticle.deadline}
              onChange={handleChange}
            />
          </li>

          <li className="form--row">
            <label>Busy</label>
            <input
              type="busy"
              placeholder="busy"
              name="busy"
              value={newArticle.busy}
              onChange={handleChange}
            />
          </li>

          {/* <li className="form--row">
            <label>Section</label>
            <select
              placeholder="Select Section"
              name="section"
              value={newArticle.section}
              onChange={handleChange}
            >
              <option>Sports</option>
            </select>
          </li>

          <li className="form--row">
            <label>Size</label>
            <select
              placeholder="Select Size"
              name="size"
              value={newArticle.size}
              onChange={handleChange}
            >
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </select>
          </li>

          <li className="form--row">
            <label>State</label>
            <select
              placeholder="Select State"
              name="state"
              value={newArticle.state}
              onChange={handleChange}
            >
              <option>A</option>
              <option>B</option>
              <option>C</option>
            </select>
          </li>

          <li className="form--row">
            <label>Journalist</label>
            <select
              placeholder="Select Journalist"
              name="journalist"
              value={newArticle.journalist}
              onChange={handleChange}
            >
              <option>A</option>
              <option>B</option>
              <option>C</option>
            </select>
          </li>

          <li className="form--row">
            <label>Photographer</label>
            <select
              placeholder="Select Photographer"
              name="photographer"
              value={newArticle.photographer}
              onChange={handleChange}
            >
              <option>A</option>
              <option>B</option>
              <option>C</option>
            </select>
          </li>

          <li className="form--row">
            <label>Deadline</label>
            <input
              type="date"
              placeholder="Add Deadline"
              name="deadline"
              value={newArticle.deadline}
              onChange={handleChange}
            />
          </li> */}

          <br></br>

          <button
            type="submit"
            onClick={handleUpload}
            onClick={() => setButtonPopup(true)}
            className="form--button"
          >
            Submit Article
          </button>
          <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
            <h5>You have succesfully submitted a new article!</h5>
          </Popup>
        </ul>
      </form>
    </div>
  );
}
