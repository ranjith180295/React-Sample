import React from 'react'

class Home extends React.Component
{
  render()
  {
    return ( 
      <div>
      <h1> Hi User, {this.props.UserName} </h1>
      </div>
     );
  };
};

export default Home;