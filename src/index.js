import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/Root";
import Blue from "@material-ui/core/colors/blue";
import Indigo from "@material-ui/core/colors/indigo";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Firebase, { FirebaseContext } from "./components/Firebase";
import Routes from "./components/Routes";
import { Router } from "react-router-dom";
import history from "./history";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: Blue[300]
    },
    secondary: {
      main: Indigo[900]
    }
  },
  typography: {
    useNextVariants: true,
    fontFamily: []
  },
  overrides: {
    MuiButton: {
      raisedPrimary: {
        color: "white",
        fontWeight: "bold"
      }
    }
  }
});
console.log('<------------')
ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <MuiThemeProvider theme={theme}>
      <Router history={history}>
        <Routes />
      </Router>
    </MuiThemeProvider>
  </FirebaseContext.Provider>,

  document.getElementById("app")
);
