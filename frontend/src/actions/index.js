import axios from 'axios';

export const FETCH_MOVIES = 'FETCH_MOVIES';

const URL = 'http://localhost:8282/titles';

export function fetchMovies(title) {

  const request = axios.get(`${URL}?title=${title}`);

  return {
    type: FETCH_MOVIES,
    payload: request
  }
}
