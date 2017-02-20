import React, { Component } from 'react';
import Book from './components/Book';
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
        <h2>Your Books</h2>
        <ul>
          <Book />
          <Book />
        </ul>
      </div>
    );
  }
}

export default App;
