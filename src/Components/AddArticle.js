import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
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
    <>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="background--box">
        <h1>This is a stupid test. Check article page if it worked out.</h1>
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={newArticle.title}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Section"
          name="section"
          value={newArticle.section}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Journalist"
          name="journalist"
          value={newArticle.journalist}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Photographer"
          name="photographer"
          value={newArticle.photographer}
          onChange={handleChange}
        />
        <Button onClick={handleUpload} variant="primary" type="submit">
          Upload
        </Button>
      </div>
    </>
  );
}
