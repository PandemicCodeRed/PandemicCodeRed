import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import purple from '@material-ui/core/colors/purple';
import yellow from '@material-ui/core/colors/yellow';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

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
  <MuiThemeProvider theme={theme}>
    <Root />
  </MuiThemeProvider>,

  document.getElementById('app')
);
