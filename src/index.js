import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import purple from '@material-ui/core/colors/purple';
import yellow from '@material-ui/core/colors/yellow';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Firebase, {FirebaseContext} from './components/Firebase'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[700],
    },
    secondary: {
      main: yellow[50],
    },
  },
  typography: {
    useNextVariants: true,
    fontFamily: [],
  },
});

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
  <MuiThemeProvider theme={theme}>
    <Root />
  </MuiThemeProvider>
  </FirebaseContext.Provider>,

  document.getElementById('app')
);
