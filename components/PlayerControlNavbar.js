/* import Link from 'next/link';

const PlayerControlNavbar = () => (
  <div>
    <h1>Player Control</h1>
    <ul>
      <li><Link href="/"><a>Home</a></Link></li>
      <li><Link href="/PlayerControlNavbar"><a>PlayerControlNavbar</a></Link></li>
    </ul>
  </div>
);

export default PlayerControlNavbar; */




//MATERIAL UI USING REACT (not Next)



import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

function PlayerControlNavbar(props) {
  const { classes } = props;
  return (
    <div>
      <ul>
        <div>
      <Button variant="contained" color="secondary" className={classes.button}>
        PLAYER 1
      </Button>
        </div>
        <div>
      <Button variant="contained" color="primary" className={classes.button}>
        MOVE
      </Button>
        </div>
        <div>
      <Button variant="contained" color="primary" className={classes.button}>
        TREAT
      </Button>
      </div>
      <div>
      <Button variant="contained" color="primary" className={classes.button}>
        SHARE
      </Button>
      </div>
      <div>
      <Button variant="contained" color="primary" className={classes.button}>
        CARD
      </Button>
      </div>
      <div>
      <Button variant="contained" color="primary" className={classes.button}>
        4
      </Button>
      </div>
      <div>
      <Button variant="contained" color="primary" className={classes.button}>
        PLAYER ROLE
      </Button>
      </div>
      </ul>
    </div>
  );
}

PlayerControlNavbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PlayerControlNavbar);








