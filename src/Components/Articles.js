import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Articletable from "./ArticleTable";
import { Link } from "react-router-dom";
import "../App.css";


export default function Articles() {
  return (
    <>
      <div className="background--box">
        <p className="overview--header">Article Overview</p>
        <ButtonGroup>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>

          <DropdownButton
            id="dropdown-basic-button"
            title="Section"
            className="filter--rough"
            variant="outline-secondary"
          >
            <Dropdown.Item href="#/action-1">News</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Politics</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Business</Dropdown.Item>
            <Dropdown.Item href="#/action-3">World</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Local</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Sport</Dropdown.Item>
          </DropdownButton>

          <DropdownButton id="dropdown-basic-button" title="Author" variant="outline-secondary" >
            <Dropdown.Item href="#/action-1">PK</Dropdown.Item>
            <Dropdown.Item href="#/action-2">AJ</Dropdown.Item>
            <Dropdown.Item href="#/action-3">LA</Dropdown.Item>
            <Dropdown.Item href="#/action-3">LJ</Dropdown.Item>
            <Dropdown.Item href="#/action-3">RS</Dropdown.Item>
            <Dropdown.Item href="#/action-3">PW</Dropdown.Item>
            <Dropdown.Item href="#/action-3">LS</Dropdown.Item>
          </DropdownButton>

          <DropdownButton id="dropdown-basic-button" title="Photographer" variant="outline-secondary">
            <Dropdown.Item href="#/action-1">AK</Dropdown.Item>
            <Dropdown.Item href="#/action-2">EJ</Dropdown.Item>
            <Dropdown.Item href="#/action-3">LP</Dropdown.Item>
            <Dropdown.Item href="#/action-3">LJ</Dropdown.Item>
            <Dropdown.Item href="#/action-3">RM</Dropdown.Item>
            <Dropdown.Item href="#/action-3">LS</Dropdown.Item>
            <Dropdown.Item href="#/action-3">MH</Dropdown.Item>
        </DropdownButton>
        </ButtonGroup>
        <ButtonGroup aria-label="Basic example" className="button--adjust">
          <Button variant="secondary">Current</Button>
          <Button variant="secondary">Archive</Button>
        </ButtonGroup>

        <br></br>
        <Articletable />
        <a href="/#/Add_Article">
          <button type="submit" className="form--button">
            Add Article
          </button>
        </a>
      </div>
    </>
  );
}
