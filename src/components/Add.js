import React, { Component } from 'react';
import apiUtils from '../utils/api_utils';
import '../css/Add.css';

class Add extends Component {
  static propTypes = {
    onAdd: React.PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      author: '',
      loading: false,
      title: '',
      error: '',
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

    this.setState({
      loading: true,
      error: '',
    });

    // Look up the book
    apiUtils.findBook(this.state.title, this.state.author).then((fetchedBook) => {
      this.props.onAdd(fetchedBook);

      this.setState({
        title: '',
        author: '',
        loading: false,
        error: '',
      });
    }).catch((error) => {
      this.setState({
        loading: false,
        error: error.message,
      });
    });
  }

  render() {
    return (
      <form className="add" onSubmit={this.onSubmit}>
        <input
          type="text"
          placeholder="Title"
          disabled={this.state.loading}
          value={this.state.title}
          onChange={this.onChangeTitle}
        />
        <input
          type="text"
          placeholder="Author"
          disabled={this.state.loading}
          value={this.state.author}
          onChange={this.onChangeAuthor}
        />
        <input
          type="submit"
          disabled={this.state.loading}
          value="submit"
        />
        <div className="error">
          {this.state.error}
        </div>
      </form>
    );
  }
}

export default Add;
