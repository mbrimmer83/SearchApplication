import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.showDetails = this.showDetails.bind(this);
  }

  showDetails(id, movieData) {
    this.props.clickFunction(movieData)
  }

  renderMovie(movieData, handler) {
    if (movieData.check === false) {
      return (
        <tr key={movieData.id}>
          <td>{movieData.message}</td>
        </tr>
      )
    }
    const id = movieData.TitleId;
    const movieTitle = movieData.TitleName;
    const storyLine = movieData.Storylines.find((e) => { return e.Type === "Turner External"}).Description;
    const releaseYear = movieData.ReleaseYear;

    return (
      <tr key={id}>
        <td>{movieTitle}</td>
        <td>{storyLine}</td>
        <td>{releaseYear}</td>
        <td>
          <button
            type="button"
            className="btn-group-xs"
            onClick={() => handler(id, movieData)}>
            Details
          </button>
        </td>
      </tr>
    )
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Movie Title</th>
            <th>Description</th>
            <th>Release Year</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {this.props.movie.map((element) => {
            return this.renderMovie(element, this.showDetails)
          })}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps({ movie }) {
  return { movie };
}

export default connect(mapStateToProps)(MovieList);
