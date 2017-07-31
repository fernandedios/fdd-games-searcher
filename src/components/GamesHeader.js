import React, { Component } from 'react';
import { Link } from 'react-router';

class GamesHeader extends Component {
  renderBack() {
    if (!this.props.backDetails) {
      return <div />;
    }

    const { to, text } = this.props.backDetails;

    return (
      <div className="pull-right" id="button-back">
        <Link to={to} className="btn btn-default pull-right">{text}</Link>
      </div>
    );
  }
  
  render() {
    return (
      <div className="row">
          <div className="container">
            <div className="col-md-12">
              <div className="heading">
                <h3>{this.props.headerTxt}</h3>
              </div>
              {this.renderBack()}
            </div>
          </div>
        </div>
    );
  }
}

export default GamesHeader;
