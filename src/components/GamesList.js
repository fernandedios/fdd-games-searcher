import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchGames, setTerm } from '../actions';
import Spinner from './Spinner';
import GamesHeader from './GamesHeader';
import GamesListItem from './GamesListItem';

const DEFAULT_SEARCH = 'metal gear';

class GamesList extends Component {
  componentWillMount() {
    // check if initial load -> application state should be defaults
    if (this.props.games.length === 0 && this.props.term === null) {
      this.props.setTerm(DEFAULT_SEARCH);
      this.props.fetchGames(DEFAULT_SEARCH);
    }
  }

  renderList(gameData, platforms) {
    return (
      <GamesListItem
        platforms={platforms}
        key={gameData.id}
        gameData={gameData}
      />
    );
  }

  render() {
    if (this.props.games.length === 0) {
      return <Spinner />;
    }

    const headerTxt = `Showing results for '${this.props.term}':`;

    return (
      <div id="container-div">
        <GamesHeader headerTxt={headerTxt} />
        <div className="row">
          <div className="container">
            <div className="col-md-12">
              {this.props.games.map(game => this.renderList(game, this.props.platforms))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ games, platforms, term }) => {
  return { games, platforms, term };
};

export default connect(mapStateToProps, { fetchGames, setTerm })(GamesList);
