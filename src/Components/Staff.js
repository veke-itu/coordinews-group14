import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Stafftable from "./StaffTableTest";
import { Link } from "react-router-dom";
import "../App.css";


export default function Staff() {
  return (
    <>
      <div className="background--box">
        <p className="overview--header">Staff Overview and un-allocated Jobs </p>
        <ButtonGroup>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>
  
        <DropdownButton id="dropdown-basic-button" title="Journalist" className="filter--rough" variant="outline-secondary" >
            <Dropdown.Item href="#/action-1">PK</Dropdown.Item>
            <Dropdown.Item href="#/action-2">AJ</Dropdown.Item>
            <Dropdown.Item href="#/action-3">LA</Dropdown.Item>
            <Dropdown.Item href="#/action-3">LJ</Dropdown.Item>
            <Dropdown.Item href="#/action-3">RS</Dropdown.Item>
            <Dropdown.Item href="#/action-3">PW</Dropdown.Item>
            <Dropdown.Item href="#/action-3">LS</Dropdown.Item>
          </DropdownButton>


          <DropdownButton id="dropdown-basic-button" title="Photographer" className="filter--rough" variant="outline-secondary">
            <Dropdown.Item href="#/action-1">AK</Dropdown.Item>
            <Dropdown.Item href="#/action-2">EJ</Dropdown.Item>
            <Dropdown.Item href="#/action-3">LP</Dropdown.Item>
            <Dropdown.Item href="#/action-3">LJ</Dropdown.Item>
            <Dropdown.Item href="#/action-3">RM</Dropdown.Item>
            <Dropdown.Item href="#/action-3">LS</Dropdown.Item>
            <Dropdown.Item href="#/action-3">MH</Dropdown.Item>
        </DropdownButton>

        <DropdownButton id="dropdown-basic-button" title="Date" className="filter--rough" variant="outline-secondary" >
          <li className="form--row">
            
              <input
               type="date"
               placeholder="Date"
               name="Date"
             />
          </li>
        </DropdownButton>

      
      
         
        </ButtonGroup>

       

        <br></br>
        <Stafftable />
        
    </div>
  </>
  );
}
