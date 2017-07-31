import { combineReducers } from 'redux';
import ReducerTerm from './ReducerTerm';
import GamesReducer from './ReducerGames';
import PlatformsReducer from './ReducerPlatforms';

const rootReducer = combineReducers({
  term: ReducerTerm,
  games: GamesReducer,
  platforms: PlatformsReducer
});

export default rootReducer;
