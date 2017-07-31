import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchGames, setTerm } from '../actions';

class SearchBar extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  onSubmit(event) {
    event.preventDefault();

    this.props.setTerm(this.state.term);
    this.props.fetchGames(this.state.term);
    this.setState({ term: '' });
    this.context.router.push('/');
  }

  render() {
    return (
      <div className="row">
        <div className="container">
          <div className="col-md-8 col-md-offset-2 search-bar">
            <form onSubmit={this.onSubmit.bind(this)}>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Type in game name here"
                  value={this.state.term}
                  onChange={event => this.setState({ term: event.target.value })}
                />
                <span className="input-group-btn">
                  <button className="btn btn-default" type="submit">Search</button>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { fetchGames, setTerm })(SearchBar);
