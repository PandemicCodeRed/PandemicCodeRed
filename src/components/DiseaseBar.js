import React, { Component } from "react";
import initialState from "../constants/inititalState";
import { withFirebase } from "./Firebase";
import { Card, Grid } from "@material-ui/core";

class DiseaseBar extends Component {
  constructor() {
    super();
    this.state = initialState;
  }
  componentDidMount() {
    this.props.firebase.database().on("value", snapshot => {
      const db = snapshot.val();
      this.setState(db);
    });
  }
  componentWillUnmount() {
    this.props.firebase.database().off("value");
  }
  render() {
    return (
      <Card>
        <Grid backgroundColor="#">
          <Grid item>
            Red: {this.state.redStatus} {this.state.redRemaining}
          </Grid>
          <Grid item>
            Blue: {this.state.blueStatus} {this.state.blueRemaining}
          </Grid>
          <Grid item>
            Black: {this.state.blackStatus} {this.state.blackRemaining}
          </Grid>
          <Grid item>
            Yellow: {this.state.yellowStatus} {this.state.yellowRemaining}
          </Grid>
        </Grid>
      </Card>
    );
  }
}

export default withFirebase(DiseaseBar);
