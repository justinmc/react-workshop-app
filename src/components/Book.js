import React, { Component } from 'react';
import '../css/Book.css';

class Book extends Component {
  constructor(props) {
    super(props);

    this.state = {
      favorited: false,
    };
  }

  onClick = () => {
    this.setState({
      favorited: !this.state.favorited,
    });
  }

  render() {
    const favoriteClass = this.state.favorited ? 'enabled' : '';

    return (
      <li
        className="book"
        onClick={this.onClick}
      >
        <div>
          <span className={`favorite ${favoriteClass}`} />
          {this.props.title}
        </div>
        <div>
          {`by ${this.props.author}`}
        </div>
      </li>
    );
  }
}

Book.propTypes = {
  title: React.PropTypes.string.isRequired,
  author: React.PropTypes.string.isRequired,
};

export default Book;
