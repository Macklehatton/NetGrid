import React, { useState } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./LoginPage.css";
import loginApi from "../../api/loginApi";

import { connect } from "react-redux";
import propTypes from "prop-types";
import { bindActionCreators } from "redux";
import * as loginSliceActions from "../login/loginSlice";

import Spinner from "../../common/Spinner";

function LoginPage({currentUserName, actions, ...props}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    actions.login(email, password)
  }

  return (
    <div className="Login">
      <h1>Login</h1>
      {props.loading ? (
        <Spinner />
      ) : (
        currentUserName == "" ? (
          <div>State: Logged out </div>
        ) : (
          <div>State: Logged in :) </div>
        )
      )}
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
        You are currently logged in as <span>{currentUserName}</span>
      </div>
    </div>
  );
}

LoginPage.propTypes = {
  actions: propTypes.object.isRequired,
  currentUserName: propTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    currentUserName: state.login.currentUserName,
    loading: state.login.loading === "pending",
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      setCurrentUsername: bindActionCreators(loginSliceActions.setCurrentUsername, dispatch),
      setLogin: bindActionCreators(loginSliceActions.setLogin, dispatch),
      login: bindActionCreators(loginSliceActions.login, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
