import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { withFirebase } from "./Firebase";
import initialState from "../constants/inititalState";
import TreatDialog from "./treatDialogue";

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
let disableTreat = false; //To disable, set to true
let disableShare = false; //To disable, set to true
let disableCard = false; //To disable, set to true
let disableActionCount = false; //To disable, set to true
let disablePlayerRole = false; //To disable, set to true

class PlayerControlNavbar extends Component {
  constructor() {
    super();
    this.state = { ...initialState, treatOpen: false, selectedType: "none" };
    this.handleTreat = this.handleTreat.bind(this);
    this.handleMove = this.handleMove.bind(this);
  }
  componentDidMount() {
    this.props.firebase.database().on("value", snapshot => { //.on is what's constantly listening to update the database locally (on all of our components)
      const db = snapshot.val();
      this.setState({
        ...this.state,
        ...db
      });
    });
  }

  //toggles move action
  handleMove() {
    this.props.firebase.database().update({
      selectedAction: "move"
    });
  }

  //triggers treat dialogue
  handleTreat() {
    this.setState({treatOpen: true });
  }

  handleTreatClose = color => {
    const { cities, playerTurn } = this.state;
    const selectedVirusStatus = this.state[`${color}Status`]
    const selectedVirusTotal = this.state[`${color}Remaining`]
    const player = this.state[playerTurn];
    const currentCity = player.location
    const selectedVirusCount = cities[currentCity][`${color}Count`]

    if (selectedVirusCount > 0) {
      let updates = {}; //modifying an updates object
      if (selectedVirusStatus === 'eradicated') {
        updates[`/cities/${currentCity}/${color}Count`] = 0; //this path structure matches the structure of the database
        updates[`/${color}Remaining`] = selectedVirusTotal + selectedVirusCount;
      }
      else {
        updates[`/cities/${currentCity}/${color}Count`] = selectedVirusCount - 1;
        updates[`/${color}Remaining`] = selectedVirusTotal + 1;
      }
      this.props.firebase.database().update(updates, () => //when updates is called here, it is taking the modified updates object and using that to update the database... go to firebase.js causing a total rerender because of the .on listener above
      {
        this.setState({treatOpen: false, selectedType: color})
      });
    }
  }

  render() {
    let { classes } = this.props;
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
          disabled={disableTreat}
        >
          TREAT
        </Button>

        <TreatDialog
          open={this.state.treatOpen}
          onClose={this.handleTreatClose}
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
        >
          CARD
        </Button>

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
} //use a button group? rather than div and ul

// PlayerControlNavbar.propTypes = {
//   classes: PropTypes.object.isRequired
// };

export default withFirebase(withStyles(styles)(PlayerControlNavbar));
