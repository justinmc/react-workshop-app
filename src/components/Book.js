import React, { Component } from 'react';
import '../css/Book.css';

class Book extends Component {
  render() {
    return (
      <li className="book">
        <div>
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
