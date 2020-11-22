import React, {useEffect, useState} from "react";

import { connect } from "react-redux";
import propTypes from "prop-types";
import { bindActionCreators } from "redux";
import { toast } from "react-toastify";

import UserList from "./UserList";
import { Redirect } from "react-router-dom";
import Spinner from "../../common/Spinner";

import * as userSliceActions from "./userSlice";
import * as loginSliceActions from "../login/loginSlice";

const UsersPage = ({
  users,
  loading,
  actions,
  ...props
}) => {
  const [redirectToAddCoursePage, setRedirectToAddCoursePage] = useState(false);

  useEffect(() => {
    if ( weShouldQueryUsers() ) {
      actions.loadUsers()
        .catch((error) => {
          alert("Loading users failed HOW DO I CATCH HERE"); });
    }

    loginSliceActions.logoutIfExpired();
  });

  function weShouldQueryUsers() {
    let myConst = loginSliceActions.loggedInWithUnexpiredToken();
    return ( users.length === 0
             && loading === "idle"
             && loginSliceActions.loggedInWithUnexpiredToken() );
  }

  const handleDeleteUser = (user) => {
    // const userWantsToDelete = confirm("Are you sure?");
    const userWantsToDelete = true;
    if (userWantsToDelete) {
      toast.success("User deleted");
      actions.deleteUser(user.id).catch((error) => {
        toast.error("Delete failed. " + error.message, { autoClose: false });
      });
    }
  };

  return (
    <>
      {redirectToAddCoursePage && <Redirect to="/user" />}
      <h2>Users</h2>
      {props.loading === "pending" ? (
        <Spinner />
      ) : props.loading === "Unauthorized" || !loginSliceActions.weAreLoggedIn() ? (
        <div>Unauthorized, please log in to a user with the correct permissions.</div>
      ) : users.length === 0 && !loginSliceActions.loggedInWithUnexpiredToken() ? (
        <div>Expired Token</div>
      ) : (
        <>
          <button
            style={{ marginBottom: 20 }}
            className="btn btn-primary add-course"
            onClick={() => setRedirectToAddCoursePage(true)}
          >
            Add User
          </button>


          <UserList
            onDeleteClick={handleDeleteUser}
            users={users}
          />
        </>
      )}
    </>
  );
};

UsersPage.propTypes = {
  actions: propTypes.object.isRequired,
  users: propTypes.array.isRequired,
  loading: propTypes.string.isRequired,
};

// Redux will magically call this when our state.users object changes following
// an action being sent to a reducer modifieing state.users
function mapStateToProps(state) {
  return {
    users: state.users.users,
    userSlice: state.users,
    loading: state.users.loading,
  };
}

// this fancy method gets installed into the component's props for you per the export line below
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadUsers: bindActionCreators(userSliceActions.fetchAll, dispatch),
      deleteUser: bindActionCreators(userSliceActions.deleteUser, dispatch),
      logout: bindActionCreators(loginSliceActions.logout, dispatch),
    },
  };
}

// export default UsersPage;
export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);
