import React, { Component } from 'react';
import { render } from 'react-dom';
import LoginCom from './LogIn/LogIn'
import Home from './Home/Home'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';  

class App extends React.Component{
render()
{
  return (
    <div>
<Router>
    <div>
        <Route path="/Home" component={Home} />
        <Route path="/" component={LoginCom} />
    </div>
</Router>
</div>

  );
}
};

render(<App />, document.getElementById('root'));
