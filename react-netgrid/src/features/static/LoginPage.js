import React, { useState } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./LoginPage.css";
import loginApi from "../../api/loginApi";

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
        setCurrentUser(data.name);
      })
  }

  function handleSubmit(event) {
    event.preventDefault();
    loginApi.login(email, password)
      .then( nameToken => {
        setCurrentUser(nameToken.name)
        localStorage.setItem('currentUserName', nameToken.name)
        localStorage.setItem('currentUserToken', nameToken.token)
        console.log(nameToken.token);
      });
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
        You are currently logged in as <span>{currentUser}</span>
      </div>
      <div>
        <button onClick={handleClicking}>update if user</button>
      </div>
    </div>
  );
}
