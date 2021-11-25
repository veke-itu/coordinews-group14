import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { uploadArticle } from "../DatabaseInteraction/db";

export default function Upload() {
  const [articles, setArticle] = useState([
    { title: "A", section: "A", journalist: "A", photographer: "A" },
  ]);
  const navigate = useNavigate();

  async function handleUpload(e) {
    e.preventDefault();

    await uploadArticle(articles);

    navigate("/");
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
        <Button
          onClick={handleUpload}
          variant="primary"
          type="submit"
        >
          Upload
        </Button>
    </div>
    </>
  );
}