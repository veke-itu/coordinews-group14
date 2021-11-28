import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { uploadArticle } from "../DatabaseInteraction/db";

export default function Upload() {
  const [articles, setArticles] = useState([]);

  const [newArticle, setNewArticle] = useState({});

  const navigate = useNavigate();

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
    <div className="background--box">
      <form>
        <ul>
          <li>
            <label>Title</label>
            <input
              type="text"
              placeholder="Title"
              name="title"
              value={newArticle.title}
              onChange={handleChange}
            />
          </li>
          <li>
            <label>Comment</label>
            <input
              type="text"
              placeholder="Comment"
              name="comment"
              value={newArticle.title}
              onChange={handleChange}
            />
          </li>

          <li>
            <label>Size</label>
            <input
              type="text"
              placeholder="Size"
              name="size"
              value={newArticle.title}
              onChange={handleChange}
            />
          </li>

          <li>
            <label>Section</label>
            <input
              type="text"
              placeholder="Section"
              name="section"
              value={newArticle.section}
              onChange={handleChange}
            />
          </li>

          <li>
            <label>State</label>
            <input
              type="text"
              placeholder="State"
              name="state"
              value={newArticle.section}
              onChange={handleChange}
            />
          </li>

          <li>
            <label>Journalist</label>
            <input
              type="text"
              placeholder="Journalist"
              name="journalist"
              value={newArticle.journalist}
              onChange={handleChange}
            />
          </li>

          <li>
            <label>Photgrapher</label>
            <input
              type="text"
              placeholder="Photographer"
              name="photographer"
              value={newArticle.photographer}
              onChange={handleChange}
            />
          </li>

          <input type="submit" />
        </ul>
      </form>
    </div>
  );
}
