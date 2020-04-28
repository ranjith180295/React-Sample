import React from 'react'
import './style'
class LoginCom extends React.Component
{
  constructor(props)
  {
    super(props);
    
    this.state = {
      UserName : '',
      UserPassword :'',
      isLoggedIn: false
    };
    
    this.ValidateLogin = this.ValidateLogin.bind(this);
    this.handleChange = this.handleChange.bind(this);
    };

  Reset()
  {
    location.reload();
  };

handleChange(event) {
  debugger;
    this.setState({
      [event.target.name]: [event.target.value]
    });
    //this.setState({value: event.target.value});
    //console.log(this);
  }

ValidateLogin()
{
  //this.setState({isLoggedIn : true});
  this.state.isLoggedIn = true;
  alert(this.state.isLoggedIn);
};

  render()
  {
    return (<div> 
    <div>
      <input className="textBoxValues" name="UserName"  type="text" id="txtLogInID" placeholder="Enter Name" value={this.state.UserName} onChange = {this.handleChange}/>
      </div>
      <div>
      <input className="textBoxValues" name="UserPassword"  type="password" id="txtLogInPwd"
      value={this.state.UserPassword} onChange = {this.handleChange}placeholder="Enter Password"/>
  </div>
  <div style={{margin: 0}}>
      <button className="Loginbutton" onClick={this.ValidateLogin}>LogIn</button>
      <button className="Loginbutton" onClick={this.Reset}>Reset</button>
      </div>
     </div>);
  };
}

class LogInFinalComp extends React.Component{
render()
{
  return ( <LoginCom/>);
};
};

export default LogInFinalComp;