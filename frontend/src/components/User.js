import { useState, useEffect } from "react";
import Plant from "./Plant";
import CreateUser from './CreateUser';


export default function User() {
  const [text, setText] = useState("");
  const [status, setStatus] = useState("typing");
  const [users, setUsers] = useState([]);
  const [displayFail, setDisplayFail] = useState("");

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
    }
  }

  const isSending = status === "sending";
  const isSent = status === "sent";


  if (isSent) {
    return (
      <div>
        {users
          .filter((user) => user.username == text)
          .map((user) => (
            <div key={user.username}>
              <h1> Welcome {user.username}</h1>
              <Plant user={user} />
            </div>
          ))}
      </div>
    );
  }


  return (
    <div>
      <h1>Welcome</h1>
      <form onSubmit={handleSubmit}>
        <h3>Login Here:</h3>
        <input
          disabled={isSending}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <br />

        <button disabled={isSending} type="submit">
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

