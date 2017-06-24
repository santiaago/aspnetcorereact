import React, { Component } from 'react';
import './App.css';
import Values from './Values.js'

class AppIntro extends Component{
  render(){
    return <div>
      <p className='App-intro'>{this.props.intro}</p>
    </div>
  }
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>minimal dotnet core react web app</h2>
        </div>
        <AppIntro intro='hello, world' />
        <Values />
      </div>
    );
  }
}

export default App;
