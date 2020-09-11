import React from "react";

function User(props) {
  return (
    <>
      <li>
        {props.name}: {props.bio} <a href="#">show</a> <a href="#">delete</a>
      </li>
    </>
  );
}

class UsersList extends React.Component {
  state = {
    error: null,
    isLoaded: false,
    users: [],
  };

  componentDidMount() {
    fetch(`${process.env.REACT_APP_API_URL}/users`)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            users: result,
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, users } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <>
          <h3>Users (x{users.length})</h3>
          <a href="#">Add New</a>
          <ul>
            {users.map((user) => (
              <User {...user} />
            ))}
          </ul>
        </>
      );
    }
  }
}

export default UsersList;
