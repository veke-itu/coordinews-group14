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
    setArticles((articles) => [...articles, newArticle]);
  }

  useEffect(() => {
    if (articles.length > 0) {
      uploadArticle(articles);
      setButtonPopup(true);
      // navigate("/");
    }
  }, [articles]);

  function handleChange(event) {
    setNewArticle({
      ...newArticle,
      [event.target.name]: event.target.value,
    });
    console.log(event.target.name + " " + event.target.value);
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
            <label>Journalist</label>
            <select
              name="journalist"
              value={newArticle.journalist}
              onChange={handleChange}
            >
              <option value="" selected disabled hidden>
                Please Select Here
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
          </li>

          <li className="form--row">
            <label>Photographer</label>
            <select
              name="photographer"
              value={newArticle.photographer}
              onChange={handleChange}
            >
              <option value="" selected disabled hidden>
                Please Select Here
              </option>
              <option>LI</option>
              <option>PL</option>
              <option>AJ</option>
              <option>MA</option>
              <option>JH</option>
              <option>JN</option>
              <option>other</option>
            </select>
          </li>

          <li className="form--row">
            <label>Section</label>
            <select
              placeholder="Select Section"
              name="section"
              value={newArticle.section}
              onChange={handleChange}
            >
              <option value="" selected disabled hidden>
                Please Select Here
              </option>
              <option>News</option>
              <option>Sports</option>
              <option>Politics</option>
              <option>Local</option>
              <option>World</option>
              <option>Business</option>
              <option>other</option>
            </select>
          </li>

          <li className="form--row">
            <label>Size</label>
            <select name="size" value={newArticle.size} onChange={handleChange}>
              <option value="" selected disabled hidden>
                Please Select Here
              </option>
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>other</option>
            </select>
          </li>

          <li className="form--row">
            <label>State</label>
            <select
              name="state"
              value={newArticle.state}
              onChange={handleChange}
            >
              <option value="" selected disabled hidden>
                Please Select Here
              </option>
              <option>P</option>
              <option>A</option>
              <option>D</option>
              <option>C</option>
              <option>other</option>
            </select>
          </li>

          <li className="form--row">
            <label>Deadline</label>
            <input
              type="date"
              placeholder="deadline"
              name="deadline"
              value={newArticle.deadline}
              onChange={handleChange}
            />
          </li>

          <br></br>

          <button type="submit" onClick={handleUpload} className="form--button">
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
