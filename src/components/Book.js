import React, { Component } from 'react';
import '../css/Book.css';

class Book extends Component {
  static propTypes = {
    title: React.PropTypes.string.isRequired,
    author: React.PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      favorited: false,
    };
  }

  onClickFavorite = () => {
    this.setState({
      favorited: !this.state.favorited,
    });
  }

  render() {
    const favoriteClass = this.state.favorited ? 'enabled' : '';

    return (
      <li
        className="book"
      >
        <div>
          <span
            className={`favorite ${favoriteClass}`}
            onClick={this.onClickFavorite}
          />
          {this.props.title}
        </div>
        <div>
          {`by ${this.props.author}`}
        </div>
      </li>
    );
  }
}

export default Book;
