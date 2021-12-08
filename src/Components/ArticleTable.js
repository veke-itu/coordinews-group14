import { getArticles } from "../DatabaseInteraction/db";
import { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

export default function Articletable() {
  const [Articles, setArticles] = useState();
  const [search, setSearch] = useState("");
  const [journalist, setJournalist] = useState("");
  const [photographer, setPhotographer] = useState("");
  const [newArticle, setSection] = useState({});

  const searchOperator = (event) => {
    setSearch(event.target.value);
  };

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
          Deadline: wrapper.attributes.Deadline,
        };
        /** Add Article is not connected to database anymore .toString().slice(4, 15) */

        console.log(mappedArticle);

        return mappedArticle;
      });

      console.log("Processing Article", articlesMapped);
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

  const filteredArticles = Object.values(Articles).filter((article) =>
    article.Title.includes(search)
  );

  // && article.Section.includes(journalist)
  const columnTitles = Object.keys(filteredArticles[0]);
  const columnLength = Object.keys(filteredArticles[0]).length;
  const rowLength = filteredArticles.length;

  const Section = [];
  const Journalist = [];
  const Photographer = [];

  for (let i = 0; i < rowLength; i++) {
    Section.push(filteredArticles[i].Section);
    Journalist.push(filteredArticles[i].Journalist);
    Photographer.push(filteredArticles[i].Photographer);
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
    console.log(event.target.name + " " + event.target.value);
  }

  return (
    <>
      <label htmlFor="search">
        <input
          id="search"
          type="text"
          onChange={searchOperator}
          placeholder="Search Article Titles"
        />
      </label>

      <ButtonGroup>
        <DropdownButton
          id="dropdown-basic-button"
          title="Journalist"
          className="filter--rough"
          variant="outline-secondary"
          name="journalist"
        >
          {Array.from({ length: rowLength }).map((_, index) => (
            <Dropdown.Item>{distinctJournalist[index]}</Dropdown.Item>
          ))}
        </DropdownButton>
      </ButtonGroup>
      <ButtonGroup aria-label="Basic example" className="button--adjust">
        <Button variant="secondary">Current</Button>
        <Button variant="secondary">Archive</Button>
      </ButtonGroup>

      <li className="form--row">
        <label>Journalist</label>
        <select
          name="section"
          value={newArticle.section}
          onChange={handleSection}
        >
          <option value="" selected disabled hidden>
            Please Select Here
          </option>

          {Array.from({ length: rowLength }).map((_, index) => (
            <option>{distinctSection[index]}</option>
          ))}
        </select>
      </li>

      <table class="table table-hover">
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
      </table>
    </>
  );
}
