import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { withStyles } from '@material-ui/core/styles';
import { SignUpLink } from './SignUp';
import { withFirebase } from './Firebase';
import * as ROUTES from '../constants/routes';

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

  onSubmit = event => {
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.LOBBY);
        this.props.firebase.database().update({
          selectedAction: "none",
          actionCount: this.state.actionCount - 1
        });
        //const user = this.props.firebase.auth().currentUser;

/* const user = firebase.auth().currentUser;

const name, email, photoUrl, uid, emailVerified;

if (user != null) {
  name = user.displayName;
  email = user.email;
  photoUrl = user.photoURL;
  emailVerified = user.emailVerified;
  uid = user.uid; */

  // The user's ID, unique to the Firebase project. Do NOT use
                   // this value to authenticate with your backend server, if
                   // you have one. Use User.getToken() instead.
}

        // GET UID
        // ASSIGN TO PLAYER SIGNING IN
        //
        // pull i snapshot of what you need form the database adn then update

        //put in logic to check for the next player.. if player1.uid = unassigned then set to current uid
      // then redirect to lobby
      //update something specificisllu use this syntax:
    }).catch(error => {
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
  withFirebase,
)(SignInFormBase);

export default withStyles(styles)(withFirebase(SignIn));

export { SignInForm };
