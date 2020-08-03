import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyCounter from './MyCounter.js';

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
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <MyCounter />
      </header>
    </div>
  );
}

export default App;
