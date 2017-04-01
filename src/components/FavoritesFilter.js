import React, { Component } from 'react';

class FavoritesFilter extends Component {
  static propTypes = {
    count: React.PropTypes.number.isRequired,
    favoritesFilterOn: React.PropTypes.bool.isRequired,
    onChange: React.PropTypes.func.isRequired,
  }

  onChange = () => {
    this.props.onChange(!this.props.favoritesFilterOn);
  }

  render() {
    return (
      <div className="favorites-filter">
        <label htmlFor="favorites-only">
          Favorites Only ({this.props.count})
        </label>
        <input
          id="favorites-only"
          onChange={this.onChange}
          type="checkbox"
          value={this.props.favoritesFilterOn}
        />
      </div>
    );
  }
}

export default FavoritesFilter;
