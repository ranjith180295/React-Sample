import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import LoginCom from './LogIn/LogIn'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';  
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      UserName :'Ranjith GR',// this.props.UserName,
      isLoggedin : false
    };
  }

  render() {
    if(!this.isLoggedin)
    {
         return  <LoginCom />;
    }
    else
    {
    return (
      <div>     
        <Hello name={this.state.UserName} />      
        <p>
          Start editing to see some magic happen :)
        </p> 
        </div>      
    );
  }
}
}

render(<App />, document.getElementById('root'));
