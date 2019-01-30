import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import WorldMap from './WorldMap'
import PlayerControlNavbar from './PlayerControlNavbar'

import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';

/* const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}); */

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 540,
    width: 1100,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
  navbar: {
    height: 540,
    width: 100
  }
});



class Root extends React.Component {
  state = {
    spacing: '40',
  };

  handleChange = key => (event, value) => {
    this.setState({
      [key]: value,
    });
  };

  render() {
    const { classes } = this.props;
    const { spacing } = this.state;



    return (
      <Grid container className={classes.root} spacing={40}>
        <Grid item xs={12}>
          <Grid container className={classes.demo} justify="center" spacing={Number(spacing)}>

          <Grid item>
                <Paper
                  className={classes.navbar} >
                <PlayerControlNavbar />
                </Paper>
              </Grid>

          <Grid item >
                <Paper className={classes.paper} >
                <WorldMap />
                </Paper>
              </Grid>

              <Grid item>
                <Paper className={classes.navbar} >
                <PlayerControlNavbar />
                </Paper>
              </Grid>

          </Grid>
        </Grid>
      </Grid>
    );
  }
}

Root.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Root);


/* function Root(props) { //#grid-with-breakpoints
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={6} sm={2}>
          <Paper className={classes.paper}><PlayerControlNavbar /></Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}><WorldMap /></Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

Root.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Root);
 */
