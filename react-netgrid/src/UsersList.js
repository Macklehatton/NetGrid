import React from 'react';
import axios from 'axios';

const allUsers = [
  {id: 1, name: "Mario", bio: "Great jumper", is_kind: true, created_at: "2012-01-01T00:31:50Z", updated_at: "2012-01-01T00:31:50Z"},
  {id: 2, name: "Luigi", bio: "Another good jumper", is_kind: true, created_at: "2012-01-01T00:31:50Z", updated_at: "2012-01-01T00:31:50Z"},
  {id: 3, name: "Bowser", bio: "Not such a jumper here", is_kind: true, created_at: "2012-01-01T00:31:50Z", updated_at: "2012-01-01T00:31:50Z"},
];


function User(props) {
  return (
    <>
      <li>
        {props.name}: {props.bio} <a href="#">show</a> <a href="#">delete</a>
      </li>
    </>
  );
}

function UsersList() {
  return (
    <>
      <h3>Users (x{allUsers.length})</h3>
      <a href="#">Add New</a>
      <ul>
        {allUsers.map( user => <User {...user} /> )}
      </ul>
    </>
  );
}

export default UsersList;
