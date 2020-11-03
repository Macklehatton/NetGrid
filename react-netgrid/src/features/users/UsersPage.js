import React, {useEffect, useState} from "react";

import { connect } from "react-redux";
import propTypes from "prop-types";
import { bindActionCreators } from "redux";
import { toast } from "react-toastify";

import UserList from "./UserList";
import { Redirect } from "react-router-dom";
import Spinner from "../../common/Spinner";

import * as userSliceActions from "./userSlice";

const UsersPage = ({
  users,
  actions,
  ...props
}) => {
  const [redirectToAddCoursePage, setRedirectToAddCoursePage] = useState(false);

  useEffect(() => {
    if (users.length === 0) {
      actions.loadUsers().catch((error) => {
        alert("Loading users failed" + error);
      });
    }
  });

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
      {props.loading ? (
        <Spinner />
      ) : (
        <>
          <button
            style={{ marginBottom: 20 }}
            className="btn btn-primary add-course"
            onClick={() => setRedirectToAddCoursePage(true)}
          >
            Add Course
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
  loading: propTypes.bool.isRequired,
};

// Redux will magically call this when our state.users object changes following
// an action being sent to a reducer modifieing state.users
function mapStateToProps(state) {
  return {
    users: state.users.users,
    userSlice: state.users,
    loading: state.users.loading === "pending",
  };
}

// this fancy method gets installed into the component's props for you per the export line below
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadUsers: bindActionCreators(userSliceActions.fetchAll, dispatch),
      deleteUser: bindActionCreators(userSliceActions.deleteUser, dispatch),
    },
  };
}

// export default UsersPage;
export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);
