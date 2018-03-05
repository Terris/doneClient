import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import SignOutButton from '../auth/SignOutButton';
import User from './User';
import Boards from './Boards';

class Authorized extends Component {
  render() {
    if (!this.props.loggedIn) {
      return <Redirect to="/" />
    }
    return(
      <div>
        <User />
        <SignOutButton />
        <Boards />
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