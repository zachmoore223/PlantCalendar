import { useState, useEffect, useCallback } from "react";
import Plant from "./Plant";
import Register from './Register';

export default function User() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("typing");
  const [users, setUsers] = useState([]);
  const [displayFail, setDisplayFail] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const periodicallyFetch = setInterval(
      () =>
        fetch("http://localhost:8080/api/users")
          .then((res) => res.json())
          .then((response) => setUsers(response)),
      1000
    );
    return () => clearInterval(periodicallyFetch);
  }, []);

  useEffect(() => {
      if (loggedIn) {
        document.body.classList.remove('login-page');
        document.body.classList.add('logged-in');
      } else {
        document.body.classList.remove('logged-in');
        document.body.classList.add('login-page');
      }
    }, [loggedIn]);

function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    sendMessage(username);

    //if username is empty when user submits reset status to typing
    let userExists = makeSureUserExists(users, username);
    let checkPassword = passwordChecker(users, username, password);

    if (username == "" || userExists == false) {
      setStatus("typing");
      setDisplayFail("User does not exist.")
    } else if (checkPassword == false) {
        setStatus("typing");
        setDisplayFail("Password incorrect.");
      }
     else {
      setStatus("sent");
      setLoggedIn(true);
    }
 }

  const isSending = status === "sending";
  const isSent = status === "sent";

const handleLogout = useCallback(() => {
    setUsername("");
    setPassword("");
    setStatus('typing');
    setLoggedIn(false);

}, []);

if (isSent) {
    return (
      <div className={loggedIn ? 'logged-in' : 'login-page'}>
        {users
          .filter((user) => user.username == username)
          .map((user) => (
            <div className="loginDiv" key={user.username}>
              <p className="displayLogin">
              Logged in as {user.username}

              <button className= "logoutButton" onClick={handleLogout}> logout </button>
              </p>

              <Plant user={user} />
              <br />
            </div>
          ))} .
      </div>
    );
}


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Login Here:</h3>
        <label className="labelName">
             Username: &nbsp;
                <input value={username} disabled={isSending}
                onChange={(e) => {setUsername(e.target.value);
                setDisplayFail("");}} />
        </label>
        <br />

        <label className="labelName">
           Password: &nbsp;
           <input value={password} disabled={isSending} type="password"
           onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />

        <button className= "loginButton" disabled={isSending} type="submit">
            Login
        </button>

        {isSending && <p>Logging in...</p>}
      </form>
      <Register />
      <p>{displayFail}</p>



    </div>
     );
}

// Pretend to send a message.
function sendMessage(username) {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
}

function makeSureUserExists (users, username) {
  console.log(users);
  let check = false;
  for (let i = 0; i < users.length; i++) {
    if (users[i].username == username) {
      check = true;
    }
  }

  return check;
}

function passwordChecker (users, username, password) {
  console.log(users);
  let check = false;
  for (let i = 0; i < users.length; i++) {
    if (users[i].username == username) {
      if (users[i].password == password){
        check = true;
      }
    }
  }

  return check;
}

