import React, { useState } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./LoginPage.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [currentUser, setCurrentUser] = useState("NO ONE");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleClicking(event) {
    fetch('http://localhost:8080/user')
      .then(response => response.body())
      .then(data => {
        debugger;
        setCurrentUser = data.name;
      })
  }

  function handleSubmit(event) {
    event.preventDefault();

    // /login
    var formData = new FormData();
    formData.append('user_name', 'mario');
    formData.append('password', '123456');

    fetch('http://localhost:8080/login', {
        method: 'POST',
        body: new URLSearchParams(formData) })
      .then(response => {
                  response.json()
                  console.log("login successful")
              })
      .catch(e => console.warn(e))

    // fetch('http://localhost:8080/login', {
    //   method: 'POST',
    //   body: formData })
    //   .then(response => {
    //       // debugger;
    //       // response.headers.get('Set-Cookie');
    //       response.json();
    //     })
    //   .catch(error => console.error('Error:', error))
    //   .then(response => console.log('Success:', JSON.stringify(response)))
  }

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="email" bsSize="large">
          <ControlLabel>Email</ControlLabel>
          <FormControl
            autoFocus
            type="user_name"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <ControlLabel>Password</ControlLabel>
          <FormControl
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
        <Button block bsSize="large" disabled={!validateForm()} type="submit">
          Login
        </Button>
      </form>

      <div>
        You are currently logged in as <span></span>
      </div>
      <div>
        <button onClick={handleClicking}>update if user</button>
      </div>
    </div>
  );
}
