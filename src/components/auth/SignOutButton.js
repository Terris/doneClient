import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signOutUser } from '../../actions';

class SignOutButton extends Component {
  constructor(props) {
    super(props)
    this.handleLogOut = this.handleLogOut.bind(this)
  }

  handleLogOut() {
    this.props.signOutUser();
  }

  render() {
    return(
      <div>
        <button onClick={this.handleLogOut} className="btn-text">Sign Out</button>
      </div>
    )
  }
}

export default connect(null, { signOutUser })(SignOutButton)
