import React, { Component } from 'react';
import Add from './components/Add';
import Book from './components/Book';
import './css/App.css';

class App extends Component {
  constructor(props) {
    super(props);

    const books = [];
    for (let i = 0; i < 1000; i += 1) {
      const randomString = Math.round(Math.random() * 10e10).toString(36);
      books.push({
        title: randomString,
        description: 'Indescribable',
        author: 'Person Who Writes Many Books',
      });
    }

    this.state = {
      books,
    };
  }

  onAddBook = (book) => {
    const books = this.state.books;
    books.unshift(book);
    this.setState({
      books,
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
                description={book.description}
              />
            )
          }
        </ul>
      </div>
    );
  }
}

export default App;
