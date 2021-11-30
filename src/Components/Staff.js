import "../App.css";
import StaffOverview from "./Staff/StaffOverview";
import StaffTable from "./Staff/StaffTable";
import JobTable from "./Staff/JobTable";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";

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
        </ButtonGroup>

        {/*<StaffTable />
        <JobTable /> */}
    </div>
  </>
  );
}
