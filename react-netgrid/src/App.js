import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./features/static/HomePage";
import AboutPage from "./features/static/AboutPage";
import Header from "./features/static/Header";
import PageNotFound from "./features/static/PageNotFound";
import UsersPage from "./features/users/UsersPage"; // eslint-disable-line import/no-named-as-default
import EasyUsersPage from "./features/users/EasyUsersPage"; // eslint-disable-line import/no-named-as-default
import ManageUserPage from "./features/users/ManageUserPage"; // eslint-disable-line import/no-named-as-default
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/users" component={EasyUsersPage} />
        // <Route path="/users" component={UsersPage} />
        <Route path="/users/:slug" component={ManageUserPage} />
        <Route path="/user" component={ManageUserPage} />
        <Route component={PageNotFound} />
      </Switch>
      <ToastContainer autoClose={3000} hideProgressBar />
    </div>
  );
}

export default App;
