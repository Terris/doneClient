import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Alert from '../Alert';
import Navigation from './Navigation';
import CurrentUser from './CurrentUser';
import BoardNav from './BoardNav';

import BoardContainer from './BoardContainer';

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
        <BoardNav />
        <Route path="/user/boards/:id" component={BoardContainer} />
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
