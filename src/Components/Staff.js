import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import "../App.css";
import StaffOverview from "./Staff/StaffOverview";
import StaffTable from "./Staff/StaffTable";
import JobTable from "./Staff/JobTable";

export default function Staff() {
  return (
    <>
      <div>
        <p className="overview--header">Staff Overview and Un-allocated Jobs</p>
      </div>

      <div className="background--box">
        <ButtonGroup aria-label="Basic example" className="button--adjust">
          <Button variant="secondary">Current</Button>
          <Button variant="secondary">Archive</Button>
        </ButtonGroup>

        <StaffOverview />
        <StaffTable />
        <JobTable />
      </div>
    </>
  );
}
