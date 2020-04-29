import React from 'react';
import data from './Data/data';

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
    this.setstate({users: data});
  };

  deleteUser(UserId)
  {
    this.setstate({users: null});
  };

  render()
  {
    const {userData ,error } = this.state;
    return (<div> 
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
          userData.map(user=>
          (
            <tr key={user.UserId}>  
                <td>{user.FirstName}</td>  
                <td>{user.LastName}</td>  
                <td>{user.EmailId}</td>  
                <td>{user.MobileNo}</td>  
                <td>{user.Address}</td>  
                <td>{user.PinCode}</td>  
                <td><Button >Edit</Button>       
                <Button onClick={() => this.deleteUser(user.UserId)}>Delete</Button> 
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