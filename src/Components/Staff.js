import "../App.css";
import StaffOverview from "./Staff/StaffOverview";
import StaffTable from "./Staff/StaffTable";
import JobTable from "./Staff/JobTable";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

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
        </ButtonGroup>

    

        {/*<StaffTable />
        <JobTable /> */}
    </div>
  </>
  );
}
