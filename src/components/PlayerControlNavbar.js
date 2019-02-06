import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { withFirebase } from "./Firebase";
import initialState from "../constants/inititalState";
import TreatDialog from "./treatDialogue";
import CardDialog from "./CardDialog"

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    "&$buttonDisabled": {
      color: theme.palette.grey[500]
    }
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
    this.state = { ...initialState, treatOpen: false, treatableCity: false, selectedType: "none", cardOpen: false};
    this.handleTreat = this.handleTreat.bind(this);
    this.handleMove = this.handleMove.bind(this);
    this.dismissTreatDialog = this.dismissTreatDialog.bind(this);
    this.handleCard = this.handleCard.bind(this)
  }

  //unsubsribe this in component did unmount

  componentDidMount() {
    this.props.firebase.database().on("value", snapshot => { //.on is what's constantly listening to update the database locally (on all of our components)
      const db = snapshot.val();
      const virusCounts = this.playerLocationVirusCounts(db);
      const treatableCity = this.isCityInfected(virusCounts);
      this.setState(state => ({
        ...state,
        ...db,
        treatableCity
      }));
    });
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
    const { cities, playerTurn } = this.state;
    const selectedVirusStatus = this.state[`${color}Status`];
    const selectedVirusTotal = this.state[`${color}Remaining`];
    const player = this.state[playerTurn];
    const currentCity = player.location;
    const selectedVirusCount = cities[currentCity][`${color}Count`];

    if (selectedVirusCount > 0) {
      let updates = {}; //modifying an updates object
      if (selectedVirusStatus === 'eradicated') {
        updates[`/cities/${currentCity}/${color}Count`] = 0; //this path structure matches the structure of the database
        updates[`/${color}Remaining`] = selectedVirusTotal + selectedVirusCount;
      } else {
        updates[`/cities/${currentCity}/${color}Count`] =
          selectedVirusCount - 1;
        updates[`/${color}Remaining`] = selectedVirusTotal + 1;
      }
      this.props.firebase.database().update(updates, () => {
        this.setState({ treatOpen: false, selectedType: color });
      });
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
    this.setState({cardOpen: true });
  }

  handleCardClose = async (card) =>{
    const {playerOne} = this.state

    await this.props.firebase.database().update({
      selectedAction: card
    });
    // // lists cities availble to move to based on city cards in hand
    let k = playerOne.hand.reduce((acc, cur)=>{
      acc += cur.name
      acc += ' '
      return acc
    },'')
    alert(`Cards ${k}`)
    await this.setState({cardOpen: false})
     // if charter action picked compare if player has city card player is currently on
    if(card === "charter"){
      let userHadCharterCityCard = playerOne.hand.find((e)=> {
        return e.name === playerOne.location
      })
      if(!userHadCharterCityCard){
        await this.props.firebase.database().update({
          selectedAction: "none"
        });
        alert("You do not have the city card that matches your location charter flight is impossible")
        await this.setState({cardOpen: false})
      }
      else{
        alert("Charter a flight to any city")
      }
    }
    if(card === "direct"){
    alert(`Citys/Cards to direct flight to: ${k}`)
    }
  }


  render() {
    const { classes } = this.props;
    const virusCounts = this.playerLocationVirusCounts(this.state);
    return (
      <div>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          disabled={disablePlayer1}
          classes={{ root: classes.button, disabled: classes.buttonDisabled }}
        >
          PLAYER 1
        </Button>

        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          disabled={disableMove}
          onClick={this.handleMove}
        >
          MOVE
        </Button>

        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={this.handleTreat}
          disabled={!this.state.treatableCity}
        >
          TREAT
        </Button>

        <TreatDialog
          open={this.state.treatOpen}
          onClose={this.handleTreatClose}
          dismiss={this.dismissTreatDialog}
          virusCounts={virusCounts}
        />

        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          disabled={disableShare}
        >
          SHARE
        </Button>

        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          disabled={disableCard}
          onClick={this.handleCard}
        >
          CARD
        </Button>

        <CardDialog
          open={this.state.cardOpen}
          onClose={this.handleCardClose}
        />


        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          disabled={disableActionCount}
        >
          {this.state.actionCount}
        </Button>

        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          disabled={disablePlayerRole}
        >
          PLAYER ROLE
        </Button>
      </div>
    );
  }
}

// PlayerControlNavbar.propTypes = {
//   classes: PropTypes.object.isRequired
// };

export default withFirebase(withStyles(styles)(PlayerControlNavbar));
