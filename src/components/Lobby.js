import React, { Component } from "react";
import initialState from "../constants/inititalState";
import { withFirebase } from "./Firebase";
import { withStyles } from "@material-ui/core/styles";
import { Button, Card } from "@material-ui/core";
import Blue from "@material-ui/core/colors/blue";

let styles = theme => ({
  cardBack: {
    backgroundColor: theme.palette.primary.main,
    textAlign: "center",
    maxWidth: 800,
    margin: "auto"
  },
  waiting: {
    backgroundColor: "#80757575",
    color: "#ff0400",
    padding: "10px",
    margin: 15,
    fontSize: 20
  },
  ready: {
    backgroundColor: "#80757575",
    color: "#57ff35",
    padding: "10px",
    margin: 15,
    fontSize: 20
  },
  playerBar: {
    backgroundColor: "#80757575",
    color: "#ffffff",
    padding: "10px",
    margin: 15,
    fontSize: 20
  },
  button: {
    margin: 20,
    "&$buttonDisabled": {
      color: theme.palette.grey[500]
    }
  },
  buttonDisabled: {}
});

class Lobby extends Component {
  constructor() {
    super();
    this.state = initialState;
    this.startGame = this.startGame.bind(this);
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
  startGame() {
    console.log("start!");
  }
  /*eslint-disable*/
  render() {
    let { classes } = this.props;
    let disableGameStart = true;
    let p1Ready = "Waiting...";
    let p2Ready = "Waiting...";
    let p3Ready = "Waiting...";
    let p4Ready = "Waiting...";
    let p1ReadyStat = "waiting";
    let p2ReadyStat = "waiting";
    let p3ReadyStat = "waiting";
    let p4ReadyStat = "waiting";

    if (this.state.playerOne.assigned) {
      p1Ready = "Ready!";
      p1ReadyStat = "ready";
    }
    if (this.state.playerTwo.assigned) {
      p2Ready = "Ready!";
      p2ReadyStat = "ready";
    }
    if (this.state.playerThree.assigned) {
      p3Ready = "Ready!";
      p3ReadyStat = "ready";
    }
    if (this.state.playerFour.assigned) {
      p4Ready = "Ready!";
      p4ReadyStat = "ready";
    }
    if (
      this.state.playerFour.assigned &&
      this.state.playerTwo.assigned &&
      this.state.playerThree.assigned &&
      this.state.playerFour.assigned
    ) {
      disableGameStart = false;
    }
    return (
      <Card className={classes.cardBack}>
        <Card className={classes.playerBar}>
          Player One: {this.state.playerOne.name}
        </Card>
        <Card className={classes[p1ReadyStat]}>{p1Ready}</Card>
        <Card className={classes.playerBar}>
          Player Two: {this.state.playerTwo.name}
        </Card>
        <Card className={classes[p2ReadyStat]}>{p2Ready}</Card>
        <Card className={classes.playerBar}>
          Player Three: {this.state.playerThree.name}
        </Card>
        <Card className={classes[p3ReadyStat]}>{p3Ready}</Card>
        <Card className={classes.playerBar}>
          Player Four: {this.state.playerFour.name}
        </Card>
        <Card className={classes[p4ReadyStat]}>{p4Ready}</Card>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          disabled={disableGameStart}
          onClick={this.startGame}
        >
          Launch Game
        </Button>
      </Card>
    );
  }
}

export default withFirebase(withStyles(styles)(Lobby));
