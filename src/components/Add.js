import React, { Component } from 'react';
import apiUtils from '../utils/api_utils';

class Add extends Component {
  static propTypes = {
    onAdd: React.PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      title: '',
      author: '',
    };
  }

  onChangeTitle = (e) => {
    this.setState({
      title: e.target.value,
    });
  }

  onChangeAuthor = (e) => {
    this.setState({
      author: e.target.value,
    });
  }

  onSubmit = (e) => {
    e.preventDefault();

    // Look up the book
    apiUtils.findBook(this.state.title, this.state.author).then((fetchedBook) => {
      this.props.onAdd(fetchedBook);

      this.setState({
        title: '',
        author: '',
      });
    }).catch(console.error.bind(console));
  }

  render() {
    return (
      <form className="Add" onSubmit={this.onSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={this.state.title}
          onChange={this.onChangeTitle}
        />
        <input
          type="text"
          placeholder="Author"
          value={this.state.author}
          onChange={this.onChangeAuthor}
        />
        <input
          type="submit"
          value="submit"
        />
      </form>
    );
  }
}

export default Add;
