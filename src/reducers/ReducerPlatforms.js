import { FETCH_PLATFORMS } from '../actions/types';

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_PLATFORMS:
      return [...action.payload];

    default:
      return state;
  }
};
