import { getArticles } from "../DatabaseInteraction/db";
import { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default function Articletable() {
  const [Articles, setArticles] = useState();
  const [search, setSearch] = useState("");
  const [section, setSection] = useState({});

  const searchOperator = (event) => {
    setSearch(event.target.value);
  };

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

  const filteredArticles = Object.values(Articles).filter((article) => {
    if (section.section === undefined && section.journalist === undefined) {
      return article.Title.includes(search);
    } else if (section.section === undefined) {
      return (
        article.Title.includes(search) &&
        article.Journalist.includes(section.journalist)
      );
    } else if (section.journalist === undefined) {
      return (
        article.Title.includes(search) &&
        article.Section.includes(section.section)
      );
    } else if (
      section.section != undefined &&
      section.journalist != undefined
    ) {
      return (
        article.Title.includes(search) &&
        article.Section.includes(section.section) &&
        article.Journalist.includes(section.journalist)
      );
    } else {
      return (
        <h2>
          Please try again. We could not find the article you were searching
          for.
        </h2>
      );
    }
  });

  const columnTitles = Object.keys(filteredArticles[0]);
  const columnLength = Object.keys(filteredArticles[0]).length;
  const rowLength = filteredArticles.length;
  const rowLengthUnfiltered = Articles.length;

  const Section = [];
  const Journalist = [];
  const Photographer = [];

  for (let i = 0; i < rowLengthUnfiltered; i++) {
    Section.push(Articles[i].Section);
    Journalist.push(Articles[i].Journalist);
    Photographer.push(Articles[i].Photographer);
  }

  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  var distinctSection = Section.filter(onlyUnique);
  var distinctJournalist = Journalist.filter(onlyUnique);
  var distinctPhotographer = Photographer.filter(onlyUnique);

  function handleSection(event) {
    setSection({
      [event.target.name]: event.target.value,
    });
  }

  return (
    <>
      <ul className="form--list">
        <li className="form--row--article">
          <input
            type="text"
            onChange={searchOperator}
            placeholder="Search Article Titles"
          />

          <select
            name="section"
            value={section.section}
            onChange={handleSection}
          >
            <option value="" selected disabled hidden>
              Please Select Here
            </option>

            {Array.from({ length: rowLengthUnfiltered }).map((_, index) => (
              <option>{distinctSection[index]}</option>
            ))}
          </select>
          <select
            name="journalist"
            value={section.journalist}
            onChange={handleSection}
          >
            <option value="" selected disabled hidden>
              Please Select Here
            </option>

            {Array.from({ length: rowLengthUnfiltered }).map((_, index) => (
              <option>{distinctJournalist[index]}</option>
            ))}
          </select>

          <button type="submit" className="form--button--long--today">
            Today's Newspaper
          </button>
        </li>
      </ul>

      <table class="table table-hover">
        {/* {typeof filteredArticles === "object" ? 
        <>*/}
        <thead>
          <br></br>
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
                  {filteredArticles[index].ArticleId}
                </Button>
              </td>
              <td>{filteredArticles[index].Title}</td>
              <td>{filteredArticles[index].Section}</td>
              <td>{filteredArticles[index].Journalist}</td>
              <td>{filteredArticles[index].Photographer}</td>
              <td>{filteredArticles[index].State}</td>
              <td>{filteredArticles[index].Size}</td>
              <td>{filteredArticles[index].Deadline}</td>
            </tr>
          ))}
        </tbody>
        {/* </> : 
        <>
        <table class="table table-hover">
          <thead>
          <tr>
            <th> Please try again. Unfortunately, we could not find the article you were looking for.
          </th>
            </tr>
          </thead>
          </>
         } */}
      </table>
    </>
  );
}
