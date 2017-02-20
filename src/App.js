import React, { Component } from 'react';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div
          className="app-bar"
        >
          <div>Story Time</div>
        </div>
        <h2>Coolest latest books!</h2>
        <ul>
          <li>Book</li>
        </ul>
      </div>
    );
  }
}

export default App;
