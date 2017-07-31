import axios from 'axios';
import { API_KEY, FETCH_GAMES, SEARCH_TERM } from './types';

const URL = 'https://igdbcom-internet-game-database-v1.p.mashape.com/games/';

export const fetchGames = (term) => {
  return (dispatch) => {
    const params = {
      fields: '*',
      limit: 20,
      order: 'total_rating_count:desc',
      search: term
    };

    axios.get(URL, {
      params,
      headers: {
        'X-Mashape-Key': API_KEY,
        Accept: 'application/json'
      }
    })
    .then((response) => {
      dispatch({ type: FETCH_GAMES, payload: response.data });
    })
    .catch(error => {
      console.log(error);
    });
  };
};

export const setTerm = (term) => {
  return {
    type: SEARCH_TERM,
    payload: term
  };
};
