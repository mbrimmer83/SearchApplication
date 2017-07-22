import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import MovieList from '../containers/movie_list';
import MovieAwardDetails from './movie_award_details';
import MovieGenreDetails from './movie_genre_details';
import MoviePeopleDetails from './movie_people_details'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showComponent: false,
      movie: null
    }
    this.showMovieDetails = this.showMovieDetails.bind(this);
    this.renderAwardDetails = this.renderAwardDetails.bind(this);
  }

  showMovieDetails(movie) {
    if (this.state.showComponent === false) {
      this.setState({
        showComponent: true,
        movie: movie
      });
    }
    else {
      this.setState({
        showComponent: false,
        movie: movie
      });
    }

  }

  renderAwardDetails() {
    if (this.state.movie !== null && this.state.movie.Awards !== undefined) {
      return this.state.showComponent ? <MovieAwardDetails movie={this.state.movie} show={this.state.showComponent}/> : null;
    }
    return;
  }

  renderGenreDetails() {
    if (this.state.movie !== null && this.state.movie.Genres !== undefined) {
      return this.state.showComponent ? <MovieGenreDetails movie={this.state.movie} show={this.state.showComponent}/> : null;
    }
    return;
  }

  renderPeopleDetails() {
    if (this.state.movie !== null && this.state.movie.Participants !== undefined) {
      return this.state.showComponent ? <MoviePeopleDetails movie={this.state.movie} show={this.state.showComponent}/> : null;
    }
    return;
  }

  render() {
    return (
      <div>
        <div>
        <SearchBar />
        <MovieList clickFunction={this.showMovieDetails} />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
            {this.renderAwardDetails()}
            </div>
            <div className="col-md-4">
            {this.renderGenreDetails()}
            </div>
            <div className="col-md-4">
            {this.renderPeopleDetails()}
            </div>
          </div>
        </div>
      </div>

    );
  }
}
