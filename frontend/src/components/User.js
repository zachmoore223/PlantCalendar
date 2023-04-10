import { useState, useEffect, useCallback } from "react";
import Plant from "./Plant";
import CreateUser from './CreateUser';


export default function User() {
  const [text, setText] = useState("");
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
    sendMessage(text);

    //if text is empty when user submits reset status to typing
    let userExists = makeSureUserExists(users, text);

    if (text == "" || userExists == false) {
      setStatus("typing");
      setDisplayFail("User does not exist.")
    } else {
      setStatus("sent");
      setLoggedIn(true);
    }
 }

  const isSending = status === "sending";
  const isSent = status === "sent";

    const handleLogout = useCallback(() => {
    setText("");
    setStatus('typing');
    setLoggedIn(false);

  }, []);

if (isSent) {
    return (
      <div className={loggedIn ? 'logged-in' : 'login-page'}>
        {users
          .filter((user) => user.username == text)
          .map((user) => (
            <div key={user.username}>
              <h2> Hello {user.username}</h2>
                <button className= "button" onClick={handleLogout}> logout </button>
              <Plant user={user} />
            </div>
          ))}
      </div>
    );
}


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Login Here:</h3>
        <input
          disabled={isSending}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <br />

        <button className= "button" disabled={isSending} type="submit">
          Login
        </button>
        {isSending && <p>Logging in...</p>}
      </form>
      <p>{displayFail}</p>

      <CreateUser />

    </div>
     );
}

// Pretend to send a message.
function sendMessage(text) {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
}

function makeSureUserExists(users, text) {
  console.log(users);
  let check = false;

  for (let i = 0; i < users.length; i++) {
    if (users[i].username == text) {
      check = true;
    }
  }

  return check;
}