import React, { Component } from 'react';

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
    this.props.onAdd({ title: this.state.title, author: this.state.author });

    this.setState({
      title: '',
      author: '',
    });
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
