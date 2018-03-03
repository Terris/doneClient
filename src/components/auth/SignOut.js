import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOutUser } from '../../actions';

class SignOut extends Component {
  constructor(props) {
    super(props)
    this.handleLogOut = this.handleLogOut.bind(this)
  }

  handleLogOut() {
    this.props.signOutUser();
  }

  render() {
    if (!this.props.loggedIn) {
      return <Redirect to="/" />
    }

    return(
      <div>
        <button onClick={this.handleLogOut}>Sign Out</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    loggedIn: state.authentication.loggedIn
  }
}

export default connect(mapStateToProps, { signOutUser })(SignOut);
