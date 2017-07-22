import { FETCH_MOVIES } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
  case FETCH_MOVIES:
  state = [];
  if (action.payload.data[0] === undefined) {
    return [{"message": "No Moive found! Please search again", "check": false, "id":100}, ...state];
  } else {
    action.payload.data.map((e) => {state.push(e)});
    return state;
  }
  default:
    return state;
  }
}
