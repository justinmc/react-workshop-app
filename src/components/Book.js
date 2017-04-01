import React, { Component } from 'react';
import '../css/Book.css';

class Book extends Component {
  static defaultProps = {
    description: '',
  }

  static propTypes = {
    author: React.PropTypes.string.isRequired,
    description: React.PropTypes.string,
    favorited: React.PropTypes.bool.isRequired,
    title: React.PropTypes.string.isRequired,
  }

  onClickFavorite = () => {
    this.props.onToggleFavorite(this.props.title);
  }

  render() {
    const favoriteClass = this.props.favorited ? 'enabled' : '';

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
        <div className="description">
          {this.props.description}
        </div>
        <div>
          {`by ${this.props.author}`}
        </div>
      </li>
    );
  }
}

export default Book;
