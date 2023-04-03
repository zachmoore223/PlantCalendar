import { useState, useEffect } from 'react';

export default function CreateUser() {
  const [text, setText] = useState('');
  const [status, setStatus] = useState('typing');
  const [users, setUsers] = useState([])
  useEffect(() => {
          const periodicallyFetch = setInterval(
             () => fetch("http://localhost:8080/api/users")
                        .then(res => res.json())
                        .then(response => setUsers(response)),
             1000);
          return () => clearInterval(periodicallyFetch)
      }, [])


  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    await sendMessage(text);
    /*if text is empty when user submits reset status to typing
    and do not add the blank user to the API */
    if(text == ""){
        setStatus('typing')
    } else {
        postNewUser(text);
        setStatus('sent');
    }


  }

  const isSending = status === 'sending';
  const isSent = status === 'sent';

  if (isSent) {
    return     <div>
                    <p>User {text} created.</p>
               </div>
  }

  return (
  <div>
  <br />
    <form onSubmit={handleSubmit}>

        <input
            disabled={isSending}
            value={text}
            onChange={e => setText(e.target.value)}
        />
        <br />

        <button
             disabled={isSending}
        >
          Create User
        </button>

        {isSending && <p>Creating User... </p>}


    </form>
    </div>
  );
}

// Pretend to send a message.
function sendMessage(text) {
  return new Promise(resolve => {
    setTimeout(resolve, 3000);
  });
}

function postNewUser (text) {
fetch('http://localhost:8080/api/users', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ "username": text })
})
   .then(response => response.json())
   .then(response => console.log(JSON.stringify(response)))
}
