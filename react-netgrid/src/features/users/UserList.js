import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const UserList = ({ users, onDeleteClick }) => (
  <table className="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Is Kind</th>
        <th>Bio</th>
        <th />
      </tr>
    </thead>
    <tbody>
      {users.map((user) => {
        return (
          <tr key={user.id} className="user">
            <td>
              <Link to={"/user/" + user.id}>{user.name}</Link>
            </td>
            <td>{user.is_kind.toString()}</td>
            <td>{user.bio}</td>
            <td>
              <button
                className="btn btn-outline-danger delete-user-btn"
                onClick={() => onDeleteClick(user)}
              >
                Delete
              </button>
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

UserList.propTypes = {
  users: PropTypes.array.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

export default UserList;
