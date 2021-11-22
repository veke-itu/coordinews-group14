import Parse from "parse";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  if (Parse.User.current()) {
    navigate("/ideas");
  }

  return (
    <>
      <h2>
        <br /> <br />
        The new software solution for your newspaper is here!!!
      </h2>

      <br />
      <br />
    </>
  );
}