import React, { Component} from 'react';

class MovieGenreDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: this.props.movie
    }
  }

  renderGenres(element, index) {

      return (
        <tr key={index}><td>{element}</td></tr>
      )
  }
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Genres</th>
          </tr>
        </thead>
        <tbody>
            {this.state.movie.Genres.map((element, index) => { return this.renderGenres(element, index)})}
        </tbody>
      </table>
    )
  }
}

export default MovieGenreDetails
