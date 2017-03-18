import React, { Component } from 'react';
import apiUtils from '../utils/api_utils';

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
    });

    // Look up the book
    apiUtils.findBook(this.state.title, this.state.author).then((fetchedBook) => {
      this.props.onAdd(fetchedBook);

      this.setState({
        title: '',
        author: '',
        loading: false,
      });
    }).catch((error) => {
      console.error(error);
      this.setState({
        loading: false,
      });
    });
  }

  render() {
    return (
      <form className="Add" onSubmit={this.onSubmit}>
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
      </form>
    );
  }
}

export default Add;
