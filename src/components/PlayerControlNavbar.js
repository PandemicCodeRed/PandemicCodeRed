import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { withFirebase } from "./Firebase";
import initialState from "../constants/inititalState";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  }
});

class PlayerControlNavbar extends Component {
  constructor() {
    super();
    this.state = initialState;
  }
  componentDidMount() {
    this.props.firebase.database().once("value", snapshot => {
      const db = snapshot.val();
      this.setState(db);
    });
    this.props.firebase.actionCount().on("value", snapshot => {
      const actionCount = snapshot.val();
      this.setState({
        ...this.state,
        actionCount: actionCount
      });
    });
  }
  render() {
    let { classes } = this.props;
    return (
      <div>
        <Button variant="contained" color="primary" className={classes.button}>
          PLAYER 1
        </Button>

        <Button variant="contained" color="primary" className={classes.button}>
          MOVE
        </Button>

        <Button variant="contained" color="primary" className={classes.button}>
          TREAT
        </Button>

        <Button variant="contained" color="primary" className={classes.button}>
          SHARE
        </Button>

        <Button variant="contained" color="primary" className={classes.button}>
          CARD
        </Button>

        <Button variant="contained" color="primary" className={classes.button}>
          {this.state.actionCount}
        </Button>

        <Button variant="contained" color="primary" className={classes.button}>
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
