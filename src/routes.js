import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import AppIndex from './components/app_index';
import GameDetails from './components/GameDetails';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={AppIndex} />
    <Route path="game/:id" component={GameDetails} />
  </Route>
);