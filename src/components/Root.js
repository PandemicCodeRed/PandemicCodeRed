import React from "react";
import PropTypes, { array } from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import WorldMap from "./WorldMap";
import PlayerControlNavbar from "./PlayerControlNavbar";
import InfectionBoardNavbar from "./InfectionBoardNavbar";
import PlayerHand from "./PlayerHand";
import { withFirebase } from "./Firebase";
import CureBoard from "./CureBoard";
import history from "../history";
import DiseaseBar from "./DiseaseBar";

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
    backgroundColor: "#1A237E",
    paddingTop: "5px",
    textAlign: "center"
  }
});

class Root extends React.Component {
  constructor() {
    super();
    this.state = { ...initialState, spacing: "16" };
    this.checkStatus = this.checkStatus.bind(this);
    this.checkDiseaseCounts = this.checkDiseaseCounts.bind(this);
    this.checkTurn = this.checkTurn.bind(this);
    this.infectPhase = this.infectPhase.bind(this);
  }

  async componentDidMount() {
    this.props.firebase.database().on("value", snapshot => {
      const db = snapshot.val();
      this.setState(
        state => ({
          ...state,
          ...db
        }),
        () => {
          this.checkDiseaseCounts();
          this.checkTurn();
          this.infectPhase();
          this.checkStatus();
        }
      );
    });
    const snapshot = await this.props.firebase
      .database()
      .child("/gameStart")
      .once("value");
    const gameStart = snapshot.val();
    if (gameStart) {
      let infectionDeck = this.infectionDeckShuffle();
      let cityCards = this.cityCardShuffle();
      this.deal(cityCards);
      let playerDeck = this.playerDeckShuffle(cityCards);
      infectionDeck = this.infectCities(infectionDeck);
      await this.props.firebase
        .database()
        .update({ playerDeck, infectionDeck, gameStart: false });
    }
  }

  //honestly not even sure if this is working right
  componentWillUnmount() {
    this.props.firebase.database().off("value");
  }

  checkTurn = () => {
    if (
      this.state.actionCount <= 0 &&
      this.state.drawCount <= 0 &&
      this.state.infectionPhase === "complete"
    ) {
      let updates = {};
      let currentPlayer = this.state.activePlayer;
      let nextPlayer = {
        playerOne: "playerTwo",
        playerTwo: "playerThree",
        playerThree: "playerFour",
        playerFour: "playerOne"
      };
      updates[`/drawCount`] = 2;
      updates[`/actionCount`] = 4;
      updates[`/activePlayer`] = nextPlayer[currentPlayer];
      updates[`/infectionPhase`] = "waiting";
      this.props.firebase.database().update(updates);
    }
  };

  checkDiseaseCounts = () => {
    let blues = this.state.blueRemaining;
    let reds = this.state.redRemaining;
    let blacks = this.state.blackRemaining;
    let yellows = this.state.yellowRemaining;
    if (yellows == 0 || blacks == 0 || reds == 0 || blues == 0) {
      this.props.firebase.database().update({ gameStatus: "lost" });
    }
  };

  checkStatus = () => {
    if (this.state.gameStatus === "lost") {
      history.push("/lost");
    } else if (this.state.gameStatus === "won") {
      history.push("/won");
    }
  };

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
    let {
      blackRemaining,
      redRemaining,
      yellowRemaining,
      blueRemaining
    } = this.state;
    let updates = {};
    let virusesRemaining = {
      blackRemaining,
      redRemaining,
      yellowRemaining,
      blueRemaining
    };
    for (let i = 3; i > 0; i--) {
      for (let j = 3; j > 0; j--) {
        const virusCount = i;
        const { name, color } = infectionDeck.pop();
        updates[`/cities/${name}/${color}Count`] = virusCount;
        virusesRemaining[`${color}Remaining`] -= virusCount;
        updates[`${color}Remaining`] = virusesRemaining[`${color}Remaining`];
      }
    }
    this.props.firebase.database().update(updates);
    return infectionDeck;
  }

  //infectionPhase will have three cases: waiting, inProgress, and complete

  infectPhase() {
    if (
      this.state.actionCount <= 0 &&
      this.state.infectionPhase === "inProgress"
    ) {
      let infectionNum = this.state.infectionRate;
      let infectionDeck = [...this.state.infectionDeck];
      let targetCities = [];
      for (let i = 0; i < infectionNum; i++) {
        targetCities.push(infectionDeck.pop());
      }
      let updates = {};
      targetCities.forEach(card => {
        alert(`${card.name} Infected!`);
        let cityColor = card.color;
        let cityName = card.name;
        updates[`/cities/${cityName}/${cityColor}Count`] =
          this.state.cities[cityName][`${cityColor}Count`] + 1;
        updates[`/${cityColor}Remaining`] =
          this.state[`${cityColor}Remaining`] - 1;
      });
      updates[`/infectionPhase`] = "complete";
      updates["/infectionDeck"] = infectionDeck;
      targetCities = [];
      this.props.firebase.database().update(updates);
    }
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
          <Grid item>
            <DiseaseBar />
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
