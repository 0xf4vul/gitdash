import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Repo from './components/Repo';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <NavBar/>
          <Repo/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
