import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';
import { spacing } from '@material-ui/system';

const styles = theme => ({
   root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    margin: 'auto',
    maxWidth: "100%"

  },
  image: {
    width: 128,
    height: 128
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%'

  },
});

function PlayerHand(props) {
  const { classes } = props;
  return (
    <div className={classes.root} >
      <Paper className={classes.paper}>
        <Grid container spacing={16} alignItems="center"
  justify="center">
          <Grid >
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="https://firebasestorage.googleapis.com/v0/b/dev-pandemic.appspot.com/o/card-country-event-roundedborder.jpeg?alt=media&token=34a1fe0b-14eb-4453-a3f4-6c638e7c4dc3" />
            </ButtonBase>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="https://firebasestorage.googleapis.com/v0/b/dev-pandemic.appspot.com/o/card-country-event-roundedborder.jpeg?alt=media&token=34a1fe0b-14eb-4453-a3f4-6c638e7c4dc3" />
            </ButtonBase>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="https://firebasestorage.googleapis.com/v0/b/dev-pandemic.appspot.com/o/card-country-event-roundedborder.jpeg?alt=media&token=34a1fe0b-14eb-4453-a3f4-6c638e7c4dc3" />
            </ButtonBase>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="https://firebasestorage.googleapis.com/v0/b/dev-pandemic.appspot.com/o/card-country-event-roundedborder.jpeg?alt=media&token=34a1fe0b-14eb-4453-a3f4-6c638e7c4dc3" />
            </ButtonBase>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="https://firebasestorage.googleapis.com/v0/b/dev-pandemic.appspot.com/o/card-country-event-roundedborder.jpeg?alt=media&token=34a1fe0b-14eb-4453-a3f4-6c638e7c4dc3" />
            </ButtonBase>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="https://firebasestorage.googleapis.com/v0/b/dev-pandemic.appspot.com/o/card-country-event-roundedborder.jpeg?alt=media&token=34a1fe0b-14eb-4453-a3f4-6c638e7c4dc3" />
            </ButtonBase>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="https://firebasestorage.googleapis.com/v0/b/dev-pandemic.appspot.com/o/card-country-event-roundedborder.jpeg?alt=media&token=34a1fe0b-14eb-4453-a3f4-6c638e7c4dc3" />
            </ButtonBase>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

PlayerHand.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PlayerHand);
