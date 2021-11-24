import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Test from './Test1';
import "../App.css"


export default function Articles() {
    return(
        <>
            <div>
                <p className="overview--header">Article Overview</p>
                
                <button className="status-buttons">Archive</button>
                
            </div>
            <div className="background--box">
                <ButtonGroup className="button">

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
                <br></br>
                <br></br>
                <br></br>
                
                <Table responsive>
                    <thead>
                        <tr>
                        <th>#</th>
                        {Array.from({ length: 12 }).map((_, index) => (
                            <th key={index}>Table heading</th>
                        ))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        {Array.from({ length: 12 }).map((_, index) => (
                            <td key={index}>Table cell {index}</td>
                        ))}
                        </tr>
                        <tr>
                        <td>2</td>
                        {Array.from({ length: 12 }).map((_, index) => (
                            <td key={index}>Table cell {index}</td>
                        ))}
                        </tr>
                        <tr>
                        <td>3</td>
                        {Array.from({ length: 12 }).map((_, index) => (
                            <td key={index}>Table cell {index}</td>
                        ))}
                        </tr>
                        <tr>
                        <td>4</td>
                        {Array.from({ length: 12 }).map((_, index) => (
                            <td key={index}>Table cell {index}</td>
                        ))}
                        </tr>
                    </tbody>
                </Table>

                <br></br>
                <br></br>
                <br></br>
                <Table />
                <h1>Hallo</h1>
                <Test/>
            </div>
        </>
    )
}