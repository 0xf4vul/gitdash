import React, { Component } from 'react';
import './App.css';
import GitNavBar from './components/GitNavBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <GitNavBar/>
      </MuiThemeProvider>
    );
  }
}

export default App;
