import React from 'react'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';  

class Home extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={
      userName:''
    };
  }

  componentDidMount() {
    debugger
      this.setState({ 
        userName : localStorage.getItem('user')
      });
  };
  
  render()
  {
    return ( 
      <div>
      <h1> Hi User {this.state.userName}, </h1>

      <p>
          <Link to="/login">Logout</Link>
      </p>
      </div>
     );
  };
};

export default Home;