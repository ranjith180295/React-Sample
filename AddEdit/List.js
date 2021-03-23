import React from "react";
import data from "../Data/data.json";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../Home/Home";
import AddUsers from "./Add";

class LstData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      error: "",
      isAddUser: false,
      isEditUser: false,
      userData: {},
      EditID: ""
    };
    this.AddUsers = this.AddUsers.bind(this);
    this.EditUser = this.EditUser.bind(this);
    this.DisplayUsers = this.DisplayUsers.bind(this);
  }

  componentDidMount() {
    this.setState({ users: Object.values(data.UsersData) });
  }

  deleteUser(UserId) {}

  AddUsers() {
    this.setState({ isAddUser: true });
  }

  EditUser(UserId) {
    this.setState({
      isEditUser: true,
      isAddUser: true,
      DisplayUsers: false,
      EditID: UserId
    });
  }

  DisplayUsers() {
    this.setState({ isAddUser: false });
  }

  render() {
    const { users, error, isAddUser, isEditUser } = this.state;

    return (
      <div>
        {!isAddUser && (
          <input
            type="button"
            value="Add Users"
            user={this.state.userData}
            onClick={this.AddUsers}
          />
        )}
        {isAddUser && (
          <input
            type="button"
            value="Display Users"
            onClick={this.DisplayUsers}
          />
        )}
        {isAddUser && (
          <div>
            <AddUsers user={this.state.EditID} />
          </div>
        )}

        {!isAddUser && (
          <table>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>EMail</th>
                <th>Mobile No</th>
                <th>Address</th>
                <th>Pin Code</th>
                <th />
                <th />
              </tr>
            </thead>
            <tbody>
              {this.state.users.map(user => (
                <tr key={user.UserId}>
                  <td>{user.FirstName}</td>
                  <td>{user.LastName}</td>
                  <td>{user.EmailId}</td>
                  <td>{user.MobileNo}</td>
                  <td>{user.Address}</td>
                  <td>{user.PinCode}</td>
                  <td>
                    <input
                      type="button"
                      value="Edit"
                      user={user.UserId}
                      onClick={() => this.EditUser(user.UserId)}
                    />
                    <input
                      type="button"
                      onClick={() => this.deleteUser(user.UserId)}
                      value="Delete"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    );
  }
}

export default LstData;
