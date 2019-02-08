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

  }

  componentDidMount() {

    // any database changes are listened too and will rerender the state as the state is updated in relation to any firebase update
    this.props.firebase.database().on("value", snapshot => {
      const db = snapshot.val();
      let cardsImg = this.getImage(db)
      // console.log(cardsImg, 'cdm cards image')
      // first set state clears last hand of last player and than second set state sets new cards for new turn/player hand

      this.setState({
        ...db,
        ...cardsImg
      });
    });
    // load all current player cards here

  }



  // componentWillUnmount() {
  //   this.props.firebase.database().off();
  // }

  // load each current player hand card images to bottom of screen
  getImage (database) {
    const { activePlayer } = database;
    const db = database;
    const currentPlayer = db[activePlayer];

    const storage = firebase.storage()
    // this.setState({cardsImg: []})
    let imageList = []
    currentPlayer.hand.forEach((e)=>{
      storage.ref(`/citycards/${e.name.toLowerCase()}.jpeg`).getDownloadURL().then((url) => {
        // imageList.push(url)
        this.setState({cardsImg: [...this.state.cardsImg, url]})
      }).catch((error) => {
        // Handle any errors
        console.log(error)
      })
    })
    // return imageList

  }

  render(){
    const { classes } = this.props;
    console.log(this.state.cardsImg)
  return (
    <div className={classes.root} >
      <Paper className={classes.paper}>
        <Grid container spacing={16} alignItems="center"
  justify="center">
          <Grid >
            {this.state.cardsImg.map((e)=>{
              console.log(e)
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
