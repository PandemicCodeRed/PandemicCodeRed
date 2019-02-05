import React, { Component } from "react";
import { withFirebase } from "./Firebase";
import { withRouter, Route, Switch } from "react-router-dom";
import Root from "./Root";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import * as ROUTES from "../constants/routes";
import Lobby from "./Lobby";

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
          <Route path="/lobby" render={() => <Lobby />} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(withFirebase(Routes));
