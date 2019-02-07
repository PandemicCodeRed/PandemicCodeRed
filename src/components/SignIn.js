import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { withStyles } from '@material-ui/core/styles';
import { SignUpLink } from './SignUp';
import { withFirebase } from './Firebase';
import * as ROUTES from '../constants/routes';
import Lobby from './Lobby';
import * as firebase from 'firebase';

const SignIn = () => (
  <div>
    <h1>SignIn</h1>
    <SignInForm />
    <SignUpLink />
  </div>
);

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 540,
    width: 1100,
    backgroundColor: '#1A237E',
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
  navbar: {
    height: 540,
    width: 120,
    backgroundColor: '#1A237E',
  },
});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  componentDidMount() {
    this.props.firebase.database().on('value', snapshot => {
      //.on is what's constantly listening to update the database locally (on all of our components)
      const db = snapshot.val();
      this.setState(state => ({
        ...state,
        ...db, //setting state to the database instead of the defaults,
      }));
    });
  }

  componentWillUnmount() {
    this.props.firebase.database().off();
  }
  onSubmit = event => {
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });

        const newUID = firebase.auth().currentUser.uid;

        let updatesPlayer = {};

        if (this.state.playerOne.uid === 'null') {
          updatesPlayer[`/playerOne/uid`] = newUID;
        } else if (this.state.playerTwo.uid === 'null') {
          updatesPlayer[`/playerTwo/uid`] = newUID;
        } else if (this.state.playerThree.uid === 'null') {
          updatesPlayer[`/playerThree/uid`] = newUID;
        } else if (this.state.playerFour.uid === 'null') {
          updatesPlayer[`/playerFour/uid`] = newUID;
        }

        this.props.firebase.database().update(updatesPlayer);

        this.props.history.push(ROUTES.LOBBY);
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === '' || email === '';
    console.log(this.state)
    return (
      <form onSubmit={this.onSubmit}>
        <input
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        <input
          name="password"
          value={password}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        />
        <button disabled={isInvalid} type="submit">
          Sign In
        </button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const SignInForm = compose(
  withRouter,
  withFirebase
)(SignInFormBase);

export default withStyles(styles)(withFirebase(SignIn));

export { SignInForm };
