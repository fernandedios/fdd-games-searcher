import { FETCH_GAMES } from '../actions/types';

const INITIAL_STATE = [];

export default(state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_GAMES:
      return [...action.payload];

    default:
      return state;
  }
};
