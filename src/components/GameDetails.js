import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import GamesHeader from './GamesHeader';

class GameDetails extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {
    if (this.props.games.length === 0) {
      this.context.router.push('/');
    }
  }

  getFullImg(url) {
    return url.replace('t_thumb/', '').replace('//', 'https://');
  }

  getValue(array, id, property) {
    const selected = array.find(obj => {
      return obj[property] == id;
    });

    if (!selected) {
      return '';
    }

    return selected.name;
  }

  renderScreens(array) {
    if (!array || array.length === 0) {
      return '';
    }
    return array.map(img => {
      const url = this.getFullImg(img.url);

      return (
        <div key={url} className="col-md-6 sc-item">
          <img alt="screenshot" src={url} className="img-responsive" />
        </div>
      );
    });
  }

  renderVideos(array) {
    if (!array || array.length === 0) {
      return '';
    }
    return array.map(vid => {
      return <li key={vid.video_id}><a href={`https://www.youtube.com/watch?v=${vid.video_id}`}>{vid.name}</a></li>;
    });
  }

  renderWebsites(array) {
    if (!array || array.length === 0) {
      return '';
    }
    return array.map(site => {
      return <li key={site.url}><a href={site.url}>{site.url}</a></li>;
    });
  }

  renderDetails() {
    const game = this.props.games.filter(obj => {
      return obj.id == this.props.params.id; // IMPORTANT for filter: use == instead of ===
    });

    const {
      name, cover,
      release_dates, summary,
      screenshots, total_rating,
      alternative_names, videos,
      websites
    } = game[0];

     let platforms = [];
     if (release_dates && release_dates.length > 0) {
       const platformsRaw = release_dates.map(release => {
         return this.getValue(this.props.platforms, release.platform, 'id');
       });

       platforms = platformsRaw.filter((item, pos, self) => {
          return self.indexOf(item) == pos;
        });
     }

     const img = this.getFullImg(cover.url);
     const rate = parseFloat(total_rating).toFixed(2);
     const platformList = platforms.join(', ');

     let alt = '';
     if (alternative_names) {
       alt = <p><strong>Alternative Names:</strong><br /> {alternative_names[0].name}</p>;
     }

    return (
      <div id="main">
        <GamesHeader headerTxt={name} backDetails={{ to: '/', text: 'Back to List' }} />
        <div className="row">
          <div className="container">
            <div className="col-md-3 detail-cover-container">
              <p><img alt="cover" src={img} className="img-responsive" /></p>
              {alt}
              <p><strong>Platform(s):</strong> <br />{platformList}</p>
              <p><strong>Rating:</strong> {rate}</p>
            </div>

            <div className="col-md-9" id="details-container">
              <div className="published">
                <h3>Summary</h3>
                <p>{summary}</p>
              </div>

              <h3>Screenshots</h3>
              {this.renderScreens(screenshots)}

              <h3 className="detail-header">Videos</h3>
              <ul>
                {this.renderVideos(videos)}
              </ul>

              <h3>Related Websites</h3>
              <ul>
                {this.renderWebsites(websites)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
  render() {
    if (this.props.games.length === 0) {
      return <div />;
    }
    
    return this.renderDetails();
  }
}

const mapStateToProps = ({ games, platforms }) => {
  return { games, platforms };
};

export default connect(mapStateToProps)(GameDetails);
