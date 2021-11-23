import Parse from "parse";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  if (Parse.User.current()) {
    navigate("/ideas");
  }

  return (
    <div>
      <div>
        <img src="../Images/Coordinews.png"></img>
      </div>
      <div>
        <br></br>
        <br></br>
        <br></br>
        <h3 className="landingPage--heading">
          Cooperate like never before and concentrate on the things that really matter to you
        </h3>
        <h5 className="landingPage--sell">
          <br /> <br />
          The software solution for your newspaper is here. Coordinews ensures planning reliability for you and your team from the very first step. With our End to End solution we offer a coordinative approach from the first idea to the finished article for your newspaper, blog or other publication.
        </h5>
      </div>

      <br />
      <br />
    </div>
  );
}