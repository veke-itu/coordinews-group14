import { useState } from "react";
import Parse from "parse";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  async function createAccount() {
    const user = new Parse.User();
    user.setUsername(username);
    user.setPassword(password);
    // user.setName(name);
    user.setEmail(email);
    try {
      await user.signUp();
    } catch (error) {
      alert("Error: " + error.message + "Please go back and try again :)");
    }
    navigate("/#");
  }

  function usernameChange(e) {
    setUsername(e.target.value);
  }
  function passwordChange(e) {
    setPassword(e.target.value);
  }

  function emailChange(e) {
    setEmail(e.target.value);
  }

  // function positionChange(e) {
  //   setName(e.target.value);
  // }

  console.log("position: ", name);

  return (
    <div className="background--box">
      <div id="second--signup">
        <form>
          <ul>Sign up to Coordinews {"\u270D"}</ul>
          <ul className="form--list">
            <li className="form--row">
              <label>Username</label>
              <input
                onChange={usernameChange}
                type="text"
                placeholder="Enter username"
              />
            </li>
            <li className="form--row">
              <label>Password</label>
              <input
                type="password"
                placeholder="Password"
                onChange={passwordChange}
              />
            </li>
            <li className="form--row">
              <label>Email</label>
              <input
                onChange={emailChange}
                type="email"
                placeholder="Enter email"
              />
            </li>
            {/* <li className="form--row">
              <label>Position</label>
              <select
                placeholder="Select Position"
                name="position"
                value={name}
                onChange={positionChange}
              > 
                <option value="" selected disabled hidden>
                  Please Select Here
                </option>
                <option>Journalist</option>
                <option>Photographer</option>
                <option>Editor</option>
              </select>
            </li>*/}
          </ul>

          <button
            onClick={createAccount}
            className="form--button"
            type="submit"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
