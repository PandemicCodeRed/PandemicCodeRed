import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import WorldMap from "./WorldMap";
import PlayerControlNavbar from "./PlayerControlNavbar";
import InfectionBoardNavbar from "./InfectionBoardNavbar";
import PlayerHand from "./PlayerHand";
import { withFirebase } from "./Firebase";
import CureBoard from "./CureBoard";

import initialState from "../constants/inititalState";
import { DECK_SIZE, EPIDEMIC_COUNT, EVENT_COUNT } from "../constants/deck";

const shuffle = require("lodash.shuffle");
const chunk = require("lodash.chunk");

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    height: 540,
    width: 1100,
    backgroundColor: "#1A237E"
  },
  control: {
    padding: theme.spacing.unit * 2
  },
  navbar: {
    height: 540,
    width: 120,
    backgroundColor: "#1A237E"
}});

class Root extends React.Component {
  constructor() {
    super();
    this.state = { ...initialState, spacing: "16" };
  }

  async componentDidMount() {
    this.props.firebase.database().on("value", snapshot => {
      const db = snapshot.val();
      this.setState(state => ({
        ...state,
        ...db,
      }));
    });
    const snapshot = await this.props.firebase.database().child('/gameStart').once('value');
    const gameStart = snapshot.val();
    if (gameStart) {
      let infectionDeck = this.infectionDeckShuffle();
      let cityCards = this.cityCardShuffle();
      this.deal(cityCards)
      let playerDeck = this.playerDeckShuffle(cityCards)
      infectionDeck = this.infectCities(infectionDeck)
      this.props.firebase.database().update({playerDeck, infectionDeck, gameStart: false})
    }
  }

  handleChange = key => (event, value) => {
    this.setState({
      [key]: value
    });
  };

  playerDeckShuffle(cityCards) {
    let quarterDecks = chunk(cityCards, 10).map(deck => [
      ...deck,
      { type: "epidemic" }
    ]);
    let shuffledDeck = quarterDecks.reduce((acc, deck) => {
      let shuffledQuarter = shuffle(deck);
      return [...acc, ...shuffledQuarter];
    }, []);
    return shuffledDeck;
  }

  cityCardShuffle() {
    const { playerDeck } = this.state;
    const citiesOffset = DECK_SIZE - (EPIDEMIC_COUNT + EVENT_COUNT);
    let cityCards = shuffle(playerDeck.slice(0, citiesOffset));
    return cityCards;
  }

  infectionDeckShuffle() {
    const { infectionDeck } = this.state;
    const shuffledDeck = shuffle(infectionDeck);
    return shuffledDeck;

  }

  infectCities(infectionDeck) {
    let {blackRemaining, redRemaining, yellowRemaining, blueRemaining} = this.state;
    let updates = {}
    let virusesRemaining = {blackRemaining, redRemaining, yellowRemaining, blueRemaining}
    for (let i = 3; i > 0; i--) {
      for (let j = 3; j > 0; j--) {
        const virusCount = i;
        const {name, color} = infectionDeck.pop()
        updates[`/cities/${name}/${color}Count`] = virusCount;
        virusesRemaining[`${color}Remaining`] -= virusCount;
        updates[`${color}Remaining`] = virusesRemaining[`${color}Remaining`]
      }
    }
    this.props.firebase.database().update(updates)
    return infectionDeck
  }

  deal(cityCards) {
    const { players } = this.state;
    const startingHands = players.reduce((hands, player) => {
      hands[`/${player}/hand`] = [cityCards.pop(), cityCards.pop()];
      return hands;
    }, {});
    this.props.firebase.database().update(startingHands);
  }

  render() {
    const { classes } = this.props;
    const { spacing } = this.state;

    return (
      <Grid container className={classes.root} spacing={16}>
        <Grid item xs={12}>
          <Grid
            container
            className={classes.demo}
            justify="center"
            spacing={Number(spacing)}
          >
            <Grid item>
              <Paper className={classes.navbar}>
                <PlayerControlNavbar />
              </Paper>
            </Grid>

            <Grid item>
              <Paper className={classes.paper}>
                <WorldMap />
              </Paper>
            </Grid>

            <Grid item>
              <Paper className={classes.navbar}>
                <InfectionBoardNavbar />
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          className={classes.demo}
          justify="center"
          spacing={Number(spacing)}
        >
          <Grid item>
            <CureBoard />
          </Grid>
          <Grid item>
            <PlayerHand />
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

Root.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(withFirebase(Root));
