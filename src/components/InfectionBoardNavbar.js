import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  }
});

function InfectionBoardNavbar(props) {
  const { classes } = props;
  return (
    <div>

      <Button variant="contained" color="primary" className={classes.button}>
        Infection Deck
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
        4
      </Button>

      <Button variant="contained" color="primary" className={classes.button}>
        PLAYER ROLE
      </Button>

     </div>

  );
} //use a button group? rather than div and ul

InfectionBoardNavbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InfectionBoardNavbar);

