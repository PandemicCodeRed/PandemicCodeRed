import React, { Component } from "react";
import { withFirebase } from "./Firebase";
import { withStyles } from "@material-ui/core/styles";
import { Card, Grid, ButtonBase, SvgIcon } from "@material-ui/core";
import initialState from "../constants/inititalState";

class CureBoard extends Component {
  constructor() {
    super();
    this.state = initialState;
    this.handleRedCure = this.handleRedCure.bind(this);
  }
  componentDidMount() {
    this.props.firebase.database().once("value", snapshot => {
      const db = snapshot.val();
      this.setState(db);
    });
    this.props.firebase.playerOne().on("value", snapshot => {
      const playerOne = snapshot.val();
      this.setState({
        playerOne: { ...playerOne, location: playerOne.location }
      });
    });
  }
  handleRedCure() {
    let hand = this.state.playerOne.hand;
    let reds = hand.filter(card => card.color === "red");
    let updates = {};
    updates["/redStatus"] = "cured";
    if (reds.length >= 4) {
      this.props.firebase.database().update(updates);
    } else {
      alert("Not enough Red Cards");
    }
  }
  render() {
    return (
      <Card>
        <Grid>
          <Grid item>
            <ButtonBase onClick={this.handleRedCure}>
              <img src="/assets/redCure.png" />
            </ButtonBase>
          </Grid>
          <Grid item />
          <Grid item />
          <Grid item />
        </Grid>
      </Card>
    );
  }
}

export default withFirebase(CureBoard);
