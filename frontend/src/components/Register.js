import React, { useState, useEffect } from "react";

export default function RegisterPopup(props) {
  const [showPopup, setShowPopup] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [displayCreatedUser, setDisplayCreatedUser] = useState("");

 function handleSubmit(e) {
    e.preventDefault();
    /*if text is empty when user submits reset status to typing
    and do not add the blank user to the API */
    if (username === "") {
      setDisplayCreatedUser("Cannot create a blank user.");
    }  else {
      postNewUser(username, password);
      setShowPopup(false);
      setUsername("");
      setPassword("");
    }
}

function postNewUser(username, password) {
  fetch("http://localhost:8080/api/users", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username: username, password: password }),
  })
    .then((response) => response.json())
    .then((response) => console.log(JSON.stringify(response)));
}

  return (
    <>
      <button className="loginButton" onClick={() => setShowPopup(true)}>
        Register
      </button>
      {showPopup && (
        <div className="popup">
          <form onSubmit={handleSubmit}>
            <h2 className="registerHeadling">Register</h2>
            <label className="labelName">
              Username: &nbsp;
              <input type="username" value={username}
                onChange={(e) => setUsername(e.target.value)} />
            </label>
            <br /> <br />
            <label className="labelPassword">
              Password: &nbsp;
              <input type="password" value={password}
                onChange={(e) => setPassword(e.target.value)} />
            </label>
            <br />
            <br />
            <button className="loginButton" type="Submit">
              Register
            </button>
            <button
              className="button"
              onClick={() => setShowPopup(false)}
            >
              Cancel
            </button>
          </form>
          <p>{displayCreatedUser}</p>
        </div>
      )}
    </>
  );
}



