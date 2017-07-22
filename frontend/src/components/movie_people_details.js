import React, { Component} from 'react';

class MoviePeopleDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: this.props.movie
    }
  }

  renderPeople(element, index) {
    if (element.IsKey === true) {
      return (
        <tr key={element.ParticipantId}>
          <td className="tableStyle">{element.Name}</td>
          <td>{element.RoleType}</td>
        </tr>
      )
    }
    return
  }
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>People</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
            {this.state.movie.Participants.map((element, index) => { return this.renderPeople(element, index)})}
        </tbody>
      </table>
    )
  }
}

export default MoviePeopleDetails
