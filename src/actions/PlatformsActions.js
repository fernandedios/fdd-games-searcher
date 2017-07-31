import axios from 'axios';
import { API_KEY, FETCH_PLATFORMS } from '../actions/types';

const URL = 'https://igdbcom-internet-game-database-v1.p.mashape.com/platforms/';

export const fetchPlatforms = () => {
  return (dispatch) => {
    const params = {
      fields: '*',
      limit: 50,
      offset: 0
    };

    axios.get(URL, {
      params,
      headers: {
        'X-Mashape-Key': API_KEY,
        Accept: 'application/json'
      }
    })
    .then((response) => {
      dispatch({ type: FETCH_PLATFORMS, payload: response.data });
    })
    .catch(error => {
      console.log(error);
    });
  };
};
