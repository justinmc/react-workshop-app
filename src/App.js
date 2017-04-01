import React, { PureComponent } from 'react';
import Add from './components/Add';
import Book from './components/Book';
import './css/App.css';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      books: [
        {
          title: 'Treasure Island',
          description: 'Pirates and stuff, arr!',
          author: 'Robert Louis Stevenson',
        },
        {
          title: 'Go Dog Go',
          description: 'A riveting tale of the fast paced life of the modern canine.',
          author: 'Dr. Seuss',
        },
      ],
    };
  }

  onAddBook = (book) => {
    this.setState({
      books: [book].concat(this.state.books),
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
