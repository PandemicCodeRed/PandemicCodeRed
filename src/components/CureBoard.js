import React, { Component } from "react";
import { withFirebase } from "./Firebase";
import { withStyles } from "@material-ui/core/styles";
import { Card, Grid, ButtonBase, SvgIcon } from "@material-ui/core";
import initialState from "../constants/inititalState";
import CureDialog from "./CureDialog";

class CureBoard extends Component {
  constructor() {
    super();
    this.state = { ...initialState, cureOpen: false, colorHand: [] };
    this.handleCure = this.handleCure.bind(this);
  }
  componentDidMount() {
    this.props.firebase.database().on("value", snapshot => {
      const db = snapshot.val();
      this.setState({ ...this.state, ...db });
    });
  }

  //triggers cure dialog
  handleCure(selColor) {
    let activePlayer = this.state.activePlayer;
    let hand = this.state[activePlayer].hand;
    let colorCards = [];
    if (hand !== undefined) {
      colorCards = hand.filter(card => card.color === selColor);
    }
    if (colorCards.length >= 4) {
      let playerLocation = this.state[activePlayer].location;
      if (this.state.cities[playerLocation].station) {
        this.setState({ cureOpen: true, colorHand: colorCards });
      } else {
        alert("No station at this location");
      }
    } else {
      alert(`Not enough ${selColor} Cards`);
    }
  }
  //cure func
  handleCureClose = async (color, discards) => {
    //discards is an array of the discarded cards from cure dialog
    let activePlayer = this.state.activePlayer;
    let newHand = this.state[activePlayer].hand.filter(
      card => discards.includes(card) != true
    );
    let updates = {};
    updates[`/${activePlayer}/hand`] = newHand;
    updates[`/${color}Status`] = "cured";
    updates["/actionCount"] = this.state.actionCount - 1;
    await this.props.firebase.database().update(updates);
    await discards.forEach(card =>
      this.props.firebase
        .database()
        .child("/playerDiscard/")
        .push(card)
    );
    await this.setState({ cureOpen: false, colorHand: [] });
  };
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
            <CureDialog
              colorHand={this.state.colorHand}
              open={this.state.cureOpen}
              onClose={this.handleCureClose}
            />
          </Grid>
        </Grid>
      </Card>
    );
  }
}

export default withFirebase(CureBoard);
