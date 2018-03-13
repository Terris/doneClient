import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Alert from '../Alert';
import Navigation from './Navigation';
import CurrentUser from './CurrentUser';
import BoardNav from './BoardNav';
import BoardContainer from './BoardContainer';
import NewBoard from './NewBoard.js'

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
        <div className="wrapper">
          <BoardNav />
          <Switch>
            <Route path="/user/boards/new" component={NewBoard} />
            <Route path="/user/boards/:id" component={BoardContainer} />
          </Switch>
        </div>
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
