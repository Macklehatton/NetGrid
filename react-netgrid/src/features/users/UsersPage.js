import React, {useEffect} from "react";

import { connect } from "react-redux";
import propTypes from "prop-types";
import { bindActionCreators } from "redux";

import {
  fetchAll,
} from "./usersSlice";


// TODO: Get the users from the db... via a service???

// fetchUsers
let myUser = "pew"

const UsersPage = ({ users }) => {

  useEffect(() => {
    debugger;
    myUser = "OK"
  });


  return (
    <>
      <h1>Users Page</h1>
      <div>Idk: {myUser} okok</div>
    </>
  );
};

function mapStateToProps(state) {
  return {
    users: state.users,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadUsers: bindActionCreators(fetchAll, dispatch),
    },
  };
}

// export default UsersPage;
export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);
