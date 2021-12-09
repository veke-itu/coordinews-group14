import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Articletable from "./ArticleTable";
import { Link } from "react-router-dom";
import "../App.css";

export default function Ideas() {
  return (
    <>
      <div className="background--box">
        <p className="overview--header">Article Overview</p>

        <br></br>
        <Articletable />
        <a href="/#/Add_Article">
          <button type="submit" className="form--button">
            Add Idea
          </button>
        </a>
      </div>
    </>
  );
}
