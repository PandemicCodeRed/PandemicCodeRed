import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';
import { spacing } from '@material-ui/system';
import initialState from "../constants/inititalState";
import { withFirebase } from "./Firebase";
import * as firebase from 'firebase';

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

class PlayerHand extends Component {
  constructor(){
    super()

    this.state = {
      ...initialState,
      cardsImg: [],
    };
    this.getImage = this.getImage.bind(this)
  }

  componentDidMount() {

    // any database changes are listened too and will rerender the state as the state is updated in relation to any firebase update


    this.props.firebase.database().on("value",  async (snapshot) => {
      const db = snapshot.val();
      // before getting the cards to show up empty out current hand and rerender new hand
      await this.setState({
        db,
        cardsImg: [],
      });
      await this.getImage(db)
    });

  }

  componentWillUnmount() {
    this.props.firebase.database().off();
  }

  // load each current player hand card images to bottom of screen
  async getImage (database) {
    const { activePlayer } = database;
    const db = database;
    const currentPlayer = db[activePlayer];
    const storage = firebase.storage()
    let imageList = []

    // get hand in another array(closure) and initialize state with the new hand array state
    for(let i = 0; i< currentPlayer.hand.length; i++){
      let k = await storage.ref(`/citycards/${currentPlayer.hand[i].name.toLowerCase()}.jpeg`).getDownloadURL()
      imageList.push(k)
    }

    this.setState({cardsImg: imageList})

  }

  render(){
    const { classes } = this.props;

  return (
    <div className={classes.root} >
      <Paper className={classes.paper}>
        <Grid container spacing={16} alignItems="center"
  justify="center">
          <Grid >
            {this.state.cardsImg.map((e)=>{
              return(
                <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={e} />
            </ButtonBase>
              )
            })}
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="https://firebasestorage.googleapis.com/v0/b/dev-pandemic.appspot.com/o/card-country-event-roundedborder.jpeg?alt=media&token=34a1fe0b-14eb-4453-a3f4-6c638e7c4dc3" />
            </ButtonBase>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
  }
}

PlayerHand.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withFirebase(withStyles(styles)(PlayerHand))
