import React from 'react';
import data from '../Data/data.json';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';  
import Home from '../Home/Home';

class LstData extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
        users : [],
        error: ''
    };
  }

  componentDidMount(){  
    debugger;

    this.setState({users: Object.values(data.UsersData)});
    debugger;
    console.log(this.state);
  };

  deleteUser(UserId)
  {

  };

  AddUsers(
    
  )

  render()
  {
    const {users ,error } = this.state;
    return (<div> 
    <input type="button" value ="Add Users" onClick={this.AddUsers} />
      <Route path="/Home" exact component={Home} />

    <table>
      <thead>
      <tr>
        <th>
          First Name
        </th>
        <th>
          Last Name
        </th>
        <th>
          EMail        
        </th>
        <th>
          Mobile No
        </th>
        <th>
          Address
        </th>
        <th>
          Pin Code        
        </th>        
        <th>          
        </th>        
        <th>          
        </th>
        </tr>
      </thead>
      <tbody>
        {
          this.state.users.map(user=>
          (
            <tr key={user.UserId}>  
                <td>{user.FirstName}</td>  
                <td>{user.LastName}</td>  
                <td>{user.EmailId}</td>  
                <td>{user.MobileNo}</td>  
                <td>{user.Address}</td>  
                <td>{user.PinCode}</td>  
                <td>
                <input type="button" value="Edit"/>   
                <input type="button" onClick={() => this.deleteUser(user.UserId)} value="Delete"/>     
                </td>
              </tr>
          )
          )
        }
      </tbody>
    </table>
    </div>);
  }
};

export default LstData;