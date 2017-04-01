import React, { PureComponent } from 'react';
import Add from './components/Add';
import Book from './components/Book';
import FavoritesFilter from './components/FavoritesFilter';
import './css/App.css';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      favoritesFilterOn: false,
      books: [
        {
          title: 'Treasure Island',
          description: 'Pirates and stuff, arr!',
          author: 'Robert Louis Stevenson',
          favorited: false,
        },
        {
          title: 'Go Dog Go',
          description: 'A riveting tale of the fast paced life of the modern canine.',
          author: 'Dr. Seuss',
          favorited: false,
        },
      ],
    };
  }

  onAddBook = (book) => {
    this.setState({
      books: [book].concat(this.state.books),
    });
  }

  onChangeFilter = (favoritesFilterOn) => {
    this.setState({
      favoritesFilterOn,
    });
  }

  onToggleBookFavorite = (title) => {
    // Copy books because this is a pure component
    const updatedBooks = new Array(...this.state.books);

    const index = updatedBooks.findIndex(book =>
      book.title === title,
    );

    // Also have to copy the book itself
    updatedBooks[index] = Object.assign({}, updatedBooks[index], {
      favorited: !updatedBooks[index].favorited,
    });

    this.setState({
      books: updatedBooks,
    });
  }

  render() {
    let books = this.state.books;
    if (this.state.favoritesFilterOn) {
      books = books.filter(book => book.favorited);
    }

    return (
      <div className="App">
        <div
          className="app-bar"
        >
          <div>Story Time</div>
        </div>
        <h2>Your Books</h2>
        <Add onAdd={this.onAddBook} />
        <FavoritesFilter
          count={0}
          favoritesFilterOn={this.state.favoritesFilterOn}
          onChange={this.onChangeFilter}
        />
        <ul>
          {
            books.map(book =>
              <Book
                key={book.title}
                title={book.title}
                author={book.author}
                description={book.description}
                favorited={book.favorited}
                onToggleFavorite={this.onToggleBookFavorite}
              />
            )
          }
        </ul>
      </div>
    );
  }
}

export default App;
