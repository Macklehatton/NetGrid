import React from 'react';

import logo from './logo.png';
import './App.css';

import MyCounter from './MyCounter.js';
import UsersList from './UsersList.js';

const allUsers = [
  {id: 1, name: "Mario", bio: "Great jumper", is_kind: true, created_at: "2012-01-01T00:31:50Z", updated_at: "2012-01-01T00:31:50Z"},
  {id: 2, name: "Luigi", bio: "Another good jumper", is_kind: true, created_at: "2012-01-01T00:31:50Z", updated_at: "2012-01-01T00:31:50Z"},
  {id: 3, name: "Bowser", bio: "Not such a jumper here", is_kind: true, created_at: "2012-01-01T00:31:50Z", updated_at: "2012-01-01T00:31:50Z"},
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <MyCounter />
        <UsersList />
        <div>API_URL: {process.env.REACT_APP_API_URL} </div>
      </header>
    </div>
  );
}

export default App;
