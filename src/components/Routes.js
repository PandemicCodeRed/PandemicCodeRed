import React, { Component } from "react";
import { withFirebase } from "./Firebase";
import { withRouter, Route, Switch } from "react-router-dom";
import Root from "./Root";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import * as ROUTES from "../constants/routes";
import Lobby from "./Lobby";
import LoseScreen from "./LoseScreen";
import WinScreen from "./WinScreen";

class Routes extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
      <Switch>
        <Route exact path="/" component={Root} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/lobby" component={Lobby} />
        <Route exact path="/lose" component={LoseScreen} />
        <Route exact path="/win" component={WinScreen} />
      </Switch>
      </div>
    );
  }
}

export default withRouter(withFirebase(Routes));
