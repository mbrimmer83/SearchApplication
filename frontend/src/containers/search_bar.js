import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMovies } from '../actions/index';


class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { title: '' };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ title: event.target.value })
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchMovies(this.state.title);
    this.setState({ title: '' });
  }
  render() {
    return (
      <form
        onSubmit={this.onFormSubmit}
        className="input-group">
        <input
          placeholder="Search for Movies by title"
          className="form-control"
          value={this.state.title}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMovies }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
