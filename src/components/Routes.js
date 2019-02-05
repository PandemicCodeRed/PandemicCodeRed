import React, { Component } from "react";
import { withFirebase } from "./Firebase";
import { withRouter, Route, Switch } from "react-router-dom";
import Root from "./Root";
import Lobby from "./Lobby";

class Routes extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <Switch>
        <Route path="/" render={() => <Root />} />
        <Route path="/lobby" render={() => <Lobby />} />
      </Switch>
    );
  }
}

export default withRouter(withFirebase(Routes));
