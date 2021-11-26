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
                        <Dropdown.Item href="#/action-1">News</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Politics</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Business</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">World</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Local</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Sport</Dropdown.Item>
                    </DropdownButton>
                    
                    <DropdownButton id="dropdown-basic-button" title="Jornalist">
                        <Dropdown.Item href="#/action-1">PK</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">AJ</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">LA</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">LJ</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">RS</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">PW</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">LS</Dropdown.Item>
                    </DropdownButton>

                    <DropdownButton id="dropdown-basic-button" title="Photographer">
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
                    <Button variant="secondary">Archived</Button>
                </ButtonGroup>
                
                <br></br>
                <Articletable/>
                <Button variant="light" as={Link} to="/Add_Article">Add Article</Button>
            </div>
        </>
    )
}