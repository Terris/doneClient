import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Alert from '../Alert';
import Navigation from './Navigation';
import CurrentUser from './CurrentUser';
import Tasks from './Tasks';

class Authorized extends Component {
  render() {
    if (!this.props.loggedIn) {
      return <Redirect to="/" />
    }
    return(
      <div>
        <Navigation />
        <CurrentUser />
        <Alert />
        <Tasks />
      </div>
    )
  }
};

function mapStateToProps(state) {
  return {
    loggedIn: state.auth.loggedIn,
    userToken: state.auth.userToken
  }
}

export default connect(mapStateToProps)(Authorized);
