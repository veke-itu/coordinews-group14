import { useState } from "react";
import Parse from "parse";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  async function createAccount() {
    const user = new Parse.User();
    user.setUsername(username);
    user.setPassword(password);
    user.setEmail(email);
    try {
      await user.signUp();
    } catch (error) {
      alert("Error: " + error.message + "Please go back and try again :)");
    }
    navigate("/ideas");
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

  return (
    <div className="background--box">
      <div id="second">
        <form>
          <ul Username="form--list">
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
          </ul>

          <button
            onClick={createAccount}
            className="form--button"
            type="submit"
          >
            log in
          </button>
        </form>
      </div>
    </div>
  );
}
