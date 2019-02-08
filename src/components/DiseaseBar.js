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
        <Grid>
          <Grid item>Red is: {this.state.redStatus}</Grid>
          <Grid item>Remaining: {this.state.redRemaining}</Grid>
          <Grid item>Blue is: {this.state.blueStatus}</Grid>
          <Grid item>Remaining: {this.state.blueRemaining}</Grid>
          <Grid item>Black is: {this.state.blackStatus}</Grid>
          <Grid item>Remaining: {this.state.blackRemaining}</Grid>
          <Grid item>Yellow is: {this.state.yellowStatus}</Grid>
          <Grid item>Remainging: {this.state.yellowRemaining}</Grid>
        </Grid>
      </Card>
    );
  }
}

export default withFirebase(DiseaseBar);
