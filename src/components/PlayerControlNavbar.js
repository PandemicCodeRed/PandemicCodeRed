import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import { withFirebase } from "./Firebase";
import initialState from "../constants/inititalState";
import TreatDialog from "./treatDialogue";
import DiscardDialog from "./DiscardDialog";
import CardDialog from "./CardDialog";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    "&$buttonDisabled": {
      color: theme.palette.grey[500]
    }
  },
  static: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.primary.main,
    color: "#ffffff",
    textAlign: "center",
    padding: "10px"
  },
  buttonDisabled: {},
  input: {
    display: "none"
  }
});

let disablePlayer1 = false; //To disable, set to true
let disableMove = false; //To disable, set to true
let disableShare = false; //To disable, set to true
let disableCard = false; //To disable, set to true
let disableActionCount = false; //To disable, set to true
let disablePlayerRole = false; //To disable, set to true

class PlayerControlNavbar extends Component {
  constructor() {
    super();
    this.state = {
      ...initialState,
      treatOpen: false,
      treatableCity: false,
      selectedType: "none",
      cardOpen: false,
      discardDialog: false
    };
    this.handleTreat = this.handleTreat.bind(this);
    this.handleMove = this.handleMove.bind(this);
    this.dismissTreatDialog = this.dismissTreatDialog.bind(this);
    this.handleCard = this.handleCard.bind(this);
  }

  componentDidMount() {
    this.props.firebase.database().on("value", snapshot => {
      const db = snapshot.val();
      const virusCounts = this.playerLocationVirusCounts(db);
      const treatableCity = this.isCityInfected(virusCounts);
      const drawPhase = this.isDrawPhase(db);
      const { drawCount, playerDeck, playerHand } = db;
      this.setState(state => ({
        ...state,
        ...db,
        treatableCity,
        drawPhase,
        drawCount,
        playerDeck,
        playerHand
      }));
    });
  }

  isDrawPhase = db => {
    return db.drawCount > 0 && db.actionCount === 0;
  };

  closeDiscardDialog = drawCount => {
    if (drawCount === 0) {
      this.setState({ discardDialog: false });
    }
  };

  handleDraw = () => {
    const { firebase } = this.props;
    const { drawCount, playerDeck, activePlayer } = this.state;
    const playerHand = this.state[activePlayer].hand;

    if (!playerDeck) {
      firebase.database().update({ gamestatus: "lost" });
    } else if (playerHand && playerHand.length === 7) {
      this.setState({ discardDialog: true });
    } else {
      let updates = {};
      updates[`/${activePlayer}/hand`] = [
        ...playerHand,
        playerDeck[playerDeck.length - 1]
      ];
      updates["/playerDeck"] = playerDeck.slice(0, playerDeck.length - 1);
      updates["/drawCount"] = drawCount - 1;
      updates["/infectionPhase"] = drawCount === 1 ? "inProgress" : "waiting";
      firebase.database().update(updates);
    }
  };

  componentWillUnmount() {
    this.props.firebase.database().off();
  }

  //toggles move action
  handleMove() {
    this.props.firebase.database().update({
      selectedAction: "move"
    });
  }

  //triggers treat dialog
  handleTreat() {
    this.setState({ treatOpen: true });
  }

  dismissTreatDialog() {
    this.setState({ treatOpen: false });
  }

  handleTreatClose = color => {
    const { cities, activePlayer } = this.state;
    const selectedVirusStatus = this.state[`${color}Status`];
    const selectedVirusTotal = this.state[`${color}Remaining`];
    const player = this.state[activePlayer];
    const currentCity = player.location;
    const selectedVirusCount = cities[currentCity][`${color}Count`];
    if (selectedVirusCount > 0) {
      let updates = {};
      if (selectedVirusStatus === "eradicated") {
        updates[`/cities/${currentCity}/${color}Count`] = 0;
        updates[`/${color}Remaining`] = selectedVirusTotal + selectedVirusCount;
        updates[`/actionCount`] = this.state.actionCount - 1;
      } else {
        updates[`/cities/${currentCity}/${color}Count`] =
          selectedVirusCount - 1;
        updates[`/${color}Remaining`] = selectedVirusTotal + 1;
        updates[`/actionCount`] = this.state.actionCount - 1;
      }
      this.setState({ treatOpen: false, selectedType: color });
      this.props.firebase.database().update(updates);
    }
  };

  playerLocationVirusCounts(db) {
    const { activePlayer, cities } = db;
    const playerLocation = db[activePlayer].location;
    const { yellowCount, blackCount, redCount, blueCount } = cities[
      playerLocation
    ];
    const virusCounts = { yellowCount, blackCount, redCount, blueCount };
    return virusCounts;
  }

  isCityInfected(virusCounts) {
    return Object.values(virusCounts).some(count => count > 0);
  }

  handleCard() {
    this.setState({ cardOpen: true });
  }

  handleCardClose = async card => {
    const { activePlayer } = this.state;
    const db = this.state;
    const currentPlayer = db[activePlayer];

    // this switches the selected action to direct or charter
    await this.props.firebase.database().update({
      selectedAction: card
    });

    // // lists cities availble to move to based on city cards in hand
    let k = currentPlayer.hand.reduce((acc, cur) => {
      acc += cur.name;
      acc += " ";
      return acc;
    }, "");
    alert(`Cards ${k}`);
    await this.setState({ cardOpen: false });
    // if charter action picked compare if player has city card player is currently on
    if (card === "charter") {
      let userHadCharterCityCard = currentPlayer.hand.find(e => {
        return e.name === currentPlayer.location;
      });
      if (!userHadCharterCityCard) {
        await this.props.firebase.database().update({
          selectedAction: "none"
        });
        alert(
          "You do not have the city card that matches your location charter flight is impossible"
        );
        await this.setState({ cardOpen: false });
      } else {
        alert("Charter a flight to any city");
      }
    }
    if (card === "direct") {
      alert(`Citys/Cards to direct flight to: ${k}`);
    }
  };

  render() {
    const { classes } = this.props;
    const { drawPhase } = this.state;
    const virusCounts = this.playerLocationVirusCounts(this.state);

    const activePlayer = this.state.activePlayer;
    const playerHand = this.state[this.state.activePlayer].hand;
    const playerDeck = this.state.playerDeck;

    let formattedPlayer = `PLAYER ${this.state.activePlayer
      .substring(6)
      .toUpperCase()}`;
    return (
      <div padding="15px">
        <Card variant="contained" className={classes.static}>
          {formattedPlayer}
        </Card>

        <Card variant="contained" className={classes.static}>
          ACTIONS: {this.state.actionCount}
        </Card>

        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          disabled={drawPhase}
          onClick={this.handleMove}
        >
          MOVE
        </Button>

        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={this.handleTreat}
          disabled={!this.state.treatableCity || drawPhase}
        >
          TREAT
        </Button>

        <TreatDialog
          open={this.state.treatOpen}
          onClose={this.handleTreatClose}
          dismiss={this.dismissTreatDialog}
          virusCounts={virusCounts}
        />

        <DiscardDialog
          open={this.state.discardDialog}
          playerHand={playerHand}
          playerDeck={playerDeck}
          activePlayer={activePlayer}
          drawCount={this.state.drawCount}
          closeDialog={this.closeDiscardDialog}
        />

        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          disabled={drawPhase}
        >
          SHARE
        </Button>

        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          disabled={drawPhase}
          onClick={this.handleCard}
        >
          CARD
        </Button>

        <CardDialog open={this.state.cardOpen} onClose={this.handleCardClose} />

        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          disabled={!drawPhase}
          onClick={this.handleDraw}
        >
          DRAW
        </Button>
      </div>
    );
  }
}

// PlayerControlNavbar.propTypes = {
//   classes: PropTypes.object.isRequired
// };

export default withFirebase(withStyles(styles)(PlayerControlNavbar));
