import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPlatforms } from '../actions';
import SearchBar from './SearchBar';
import Spinner from './Spinner';

class App extends Component {
  componentDidMount() {
    this.props.fetchPlatforms();
  }

  render() {
    if (this.props.platforms.length === 0) {
      return <Spinner />;
    }

    return (
      <div id="main">
        <SearchBar />
        {this.props.children}
      </div>
    );
  }
}

const mapStateToProps = ({ platforms }) => {
  return { platforms };
};

export default connect(mapStateToProps, { fetchPlatforms })(App);
