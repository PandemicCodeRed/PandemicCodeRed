import React, { Component } from "react";
import { withFirebase } from "./Firebase";
import { withStyles } from "@material-ui/core/styles";
import { Card, Grid, ButtonBase, SvgIcon } from "@material-ui/core";
import initialState from "../constants/inititalState";

class CureBoard extends Component {
  constructor() {
    super();
    this.state = initialState;
    this.handleCure = this.handleCure.bind(this);
  }
  componentDidMount() {
    this.props.firebase.database().once("value", snapshot => {
      const db = snapshot.val();
      this.setState(db);
    });
    this.props.firebase.database().on("value", snapshot => {
      const db = snapshot.val();
      this.setState(db);
    });
  }
  handleCure(color) {
    let activePlayer = this.state.activePlayer;
    let hand = this.state[activePlayer].hand;
    let colorCards = hand.filter(card => card.color === color);
    let updates = {};
    updates[`/${color}Status`] = "cured";
    if (colorCards.length >= 4) {
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
            <ButtonBase
              onClick={() => {
                this.handleCure("red");
              }}
            >
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
