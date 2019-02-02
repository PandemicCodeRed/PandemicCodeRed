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
              <img className={classes.img} alt="complex" src="https://www.yardgreetings.com/wp-content/uploads/2018/03/symbol-question-mark-black-and-white-yard-greeting-card-sign-happy-birthday-over-the-hill-plastic-600x600.jpg" />
            </ButtonBase>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="https://www.yardgreetings.com/wp-content/uploads/2018/03/symbol-question-mark-black-and-white-yard-greeting-card-sign-happy-birthday-over-the-hill-plastic-600x600.jpg" />
            </ButtonBase>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="https://www.yardgreetings.com/wp-content/uploads/2018/03/symbol-question-mark-black-and-white-yard-greeting-card-sign-happy-birthday-over-the-hill-plastic-600x600.jpg" />
            </ButtonBase>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="https://www.yardgreetings.com/wp-content/uploads/2018/03/symbol-question-mark-black-and-white-yard-greeting-card-sign-happy-birthday-over-the-hill-plastic-600x600.jpg" />
            </ButtonBase>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="https://www.yardgreetings.com/wp-content/uploads/2018/03/symbol-question-mark-black-and-white-yard-greeting-card-sign-happy-birthday-over-the-hill-plastic-600x600.jpg" />
            </ButtonBase>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="https://www.yardgreetings.com/wp-content/uploads/2018/03/symbol-question-mark-black-and-white-yard-greeting-card-sign-happy-birthday-over-the-hill-plastic-600x600.jpg" />
            </ButtonBase>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="https://www.yardgreetings.com/wp-content/uploads/2018/03/symbol-question-mark-black-and-white-yard-greeting-card-sign-happy-birthday-over-the-hill-plastic-600x600.jpg" />
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
