import React, { Component} from 'react';

class MovieAwardDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: this.props.movie
    }
  }

  renderAwards(element, index) {
    let Award = '';
    if (element.AwardWon === true) {
      Award = element.Award;
      return (
        <tr key={index}><td>{Award}</td></tr>
      )
    }
    else {
      return (
        <tr><td>{Award}</td></tr>
      )
    }
  }
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Awards</th>
          </tr>
        </thead>
        <tbody>
            {this.state.movie.Awards.map((element, index) => { return this.renderAwards(element, index)})}
        </tbody>
      </table>
    )
  }
}

export default MovieAwardDetails
