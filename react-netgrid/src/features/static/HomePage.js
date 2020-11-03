import React from "react";
import userApi from "../../api/userApi";
import logo from '../../common/logo.png';

const HomePage = () => {
  return (
    <>
      <h1>Welcome to NetGrid</h1>
      <img src={logo} width="100" className="App-logo" alt="logo" />
      <div>Register to play for free!</div>

      <div class="debug">
        <div>API_URL: {process.env.REACT_APP_API_URL} </div>
      </div>
    </>
  );
};

export default HomePage;
