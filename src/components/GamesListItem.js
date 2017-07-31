import React, { Component } from 'react';
import { Link } from 'react-router';

class GamesListItem extends Component {
  getValue(array, id, property) {
    const selected = array.find(obj => {
      return obj[property] == id;
    });

    if (!selected) {
      return '';
    }
    return selected.name;
  }

  render() {
    const { id, cover, name, rating, release_dates } = this.props.gameData;
    const rate = parseFloat(rating).toFixed(2);
    // console.log(this.getValue(this.props.platforms, release_dates[0].platform, 'id'));

    let platforms = '';
    if (release_dates) {
      platforms = this.getValue(this.props.platforms, release_dates[0].platform, 'id');
    }

    let url = '';
    if (cover) {
      url = cover.url;
    }

    return (
      <div className="col-md-3 resent-grid recommended-grid movie-video-grid">
        <div className="resent-grid-img recommended-grid-img">
          <Link to={`game/${id}`}><img alt="" src={url} /></Link>
          <div className="time small-time show-time movie-time"><p>Rating: {rate}</p></div>
        </div>
        <div className="resent-grid-info recommended-grid-info recommended-grid-movie-info">
          <h5><Link to={`game/${id}`} className="title">{name}</Link></h5>
          <span className="platform-desc"><p className="views views-info">{platforms}</p></span>
        </div>
      </div>
    );
  }
}

export default GamesListItem;
