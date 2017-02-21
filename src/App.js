import React, { Component } from 'react';
import Add from './components/Add';
import Book from './components/Book';
import './css/App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [
        { title: 'Treasure Island', author: 'Robert Louis Stevenson' },
        { title: 'Go Dog Go', author: 'Dr. Seuss' },
      ],
    };
  }

  onAddBook = (book) => {
    // Notice I'm not just pushing to this.state.books
    this.setState({
      books: this.state.books.concat([book]),
    });
  }

  render() {
    return (
      <div className="App">
        <div
          className="app-bar"
        >
          <div>Story Time</div>
        </div>
        <h2>Your Books</h2>
        <Add onAdd={this.onAddBook} />
        <ul>
          {
            this.state.books.map(book =>
              <Book
                key={book.title}
                title={book.title}
                author={book.author}
              />
            )
          }
        </ul>
      </div>
    );
  }
}

export default App;
