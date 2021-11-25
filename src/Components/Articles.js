import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Articletable from './ArticleTable';
import { useNavigate, Link } from "react-router-dom";
import "../App.css";



export default function Articles() {

    return(
        <>
            <div>
                <p className="overview--header">Article Overview</p>
                
            </div>
            <div className="background--box">
                <ButtonGroup >

                    <Form className="d-flex">
                        <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        />
                        <Button variant="outline-success">Magnifying glass</Button>
                    </Form>
                    
                    <DropdownButton id="dropdown-basic-button" title="Section" className="filter--rough">
                        <Dropdown.Item href="#/action-1">Section1</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Section2</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Section3</Dropdown.Item>
                    </DropdownButton>

                    <DropdownButton id="dropdown-basic-button" title="Author">
                        <Dropdown.Item href="#/action-1">Author1</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Author2</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Author3</Dropdown.Item>
                    </DropdownButton>

                </ButtonGroup>
                <ButtonGroup aria-label="Basic example" className="button--adjust">
                    <Button variant="secondary">Current</Button>
                    <Button variant="secondary">Archive</Button>
                </ButtonGroup>
                
                <br></br>
                <Articletable/>
                <Button variant="light" as={Link} to="/Add_Article">Add Article</Button>
            </div>
        </>
    )
}