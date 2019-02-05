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
      alert(`Not enough ${color} Cards`);
    }
  }
  render() {
    return (
      <Card>
        <Grid container alignItems="center" justify="center">
          <Grid item>
            <ButtonBase
              onClick={() => {
                this.handleCure("red");
              }}
            >
              <img height="42" width="42" src="/assets/redCure.png" />
            </ButtonBase>
          </Grid>
          <Grid item>
            <ButtonBase
              onClick={() => {
                this.handleCure("blue");
              }}
            >
              <img height="42" width="42" src="/assets/blueCure.png" />
            </ButtonBase>
          </Grid>
          <Grid item>
            <ButtonBase
              onClick={() => {
                this.handleCure("black");
              }}
            >
              <img height="42" width="42" src="/assets/blackCure.png" />
            </ButtonBase>
          </Grid>
          <Grid item>
            <ButtonBase
              onClick={() => {
                this.handleCure("yellow");
              }}
            >
              <img height="42" width="42" src="/assets/yellowCure.png" />
            </ButtonBase>
          </Grid>
        </Grid>
      </Card>
    );
  }
}

export default withFirebase(CureBoard);
