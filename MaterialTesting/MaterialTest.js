import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton";
import Popover from "material-ui/Popover";
import Menu from "material-ui/Menu";
import MenuItem from "material-ui/MenuItem";

import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//import "./style";

class MaterialTestCom extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  handleTouchTap = event => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false
    });
  };

  render() {
    return (
      <div>
        <div className={classes.margin}>
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <AccountCircle />
            </Grid>
            <Grid item>
              <TextField id="input-with-icon-grid" label="With a grid" />
            </Grid>
          </Grid>
        </div>

        <MuiThemeProvider>
          <div>
            <RaisedButton onClick={this.handleTouchTap} label="Click me" />
            <Popover
              open={this.state.open}
              anchorEl={this.state.anchorEl}
              anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
              targetOrigin={{ horizontal: "left", vertical: "top" }}
              onRequestClose={this.handleRequestClose}
            >
              <Menu>
                <MenuItem primaryText="Refresh" />
                <MenuItem primaryText="Help &amp; feedback" />
                <MenuItem primaryText="Settings" />
                <MenuItem primaryText="Sign out" />
              </Menu>
            </Popover>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

// class LogInFinalComp extends React.Component{
// render()
// {
//   return ( <LoginCom/>);
// };
// };

export default MaterialTestCom;
