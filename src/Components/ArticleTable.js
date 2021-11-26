import Table from "react-bootstrap/Table";
import { getArticles } from "../DatabaseInteraction/db";
import { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default function Articletable() {
  const [Articles, setArticle] = useState();

  useEffect(() => {
    getArticles().then((Articles) => {
      console.log(Articles);
      const articlesMapped = Articles.map((wrapper) => {
        const mappedArticle = {
          ArticleId: wrapper.id,
          Title: wrapper.attributes.Title,
          Section: wrapper.attributes.Section,
          Journalist: wrapper.attributes.Journalist,
          Photographer: wrapper.attributes.Photographer,
          State: wrapper.attributes.State,
          Size: wrapper.attributes.Size,
        };

        console.log(mappedArticle);

        return mappedArticle;
      });

      console.log("Processing Article", articlesMapped);
      setArticle(articlesMapped);
    });
  }, []);

  if (!Articles) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  const columnTitles = Object.keys(Articles[0]);
  const columnLength = Object.keys(Articles[0]).length;
  const rowLength = Articles.length;
  console.log("ArticleTest", Articles);
  console.log("Column Test", columnTitles[0]);
  console.log("Rower:", Articles[0].Photographer);

  return (
    <div>
      <Table responsive>
        <thead>
          <tr>
            {Array.from({ length: columnLength }).map((_, index) => (
              <th key={index}>{columnTitles[index]}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: rowLength }).map((_, index) => (
            <tr>
              {/* TODO: Ask for help on this one with TA's - My attempts with nested for loops and map functions broke */}
              <td as={Link} to="/Add_Article">
                {/* TODO: Link Reference */}
                {/* <Button variant="light" as={Link} to="/Add_Article">Add Article</Button> */}
                <Button variant="light" as={Link} to="/ArticleId">
                  {Articles[index].ArticleId}
                </Button>
              </td>
              <td>{Articles[index].Title}</td>
              <td>{Articles[index].Section}</td>
              <td>{Articles[index].Journalist}</td>
              <td>{Articles[index].Photographer}</td>
              <td>{Articles[index].Size}</td>
              <td>{Articles[index].State}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
