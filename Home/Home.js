import React from 'react'

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
    const { userData} = this.state;
    return ( 
      <div>
      <h1> Hi User, {userData.userName} </h1>
      </div>
     );
  };
};

export default Home;