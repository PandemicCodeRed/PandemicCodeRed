import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import WorldMap from './WorldMap';
import PlayerControlNavbar from './PlayerControlNavbar';
import InfectionBoardNavbar from './InfectionBoardNavbar';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 540,
    width: 1100,
    backgroundColor: '#1A237E'
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
  navbar: {
    height: 540,
    width: 120,
    backgroundColor: '#1A237E'
  }
});



class Root extends React.Component {
  state = {
    spacing: '16',
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
      <Grid container className={classes.root} spacing={16}>
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
                <InfectionBoardNavbar />
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
