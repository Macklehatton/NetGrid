import React from "react";
import userApi from "../../api/userApi";


const myfunc = () => {
  userApi.fetchAllUsers();
}

const HomePage = () => {
  return (
    <>
      <h1>Home Page</h1>
      <div>I'm the home page!</div>
      <div>API_URL: {process.env.REACT_APP_API_URL} </div>
      <button onClick={myfunc}>push</button>
    </>
  );
};

export default HomePage;
