import React, { Component } from 'react';
import './App.css';
import Values from './Values.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>minimal dotnet core react web app</h2>
        </div>
        <p className="App-intro">
          hello, world.
        </p>
        <Values />
      </div>
    );
  }
}

export default App;
