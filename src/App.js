import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <NavBar/>
      </MuiThemeProvider>
    );
  }
}

export default App;
