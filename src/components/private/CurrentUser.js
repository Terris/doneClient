import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCurrentUser } from '../../actions'

class CurrentUser extends Component {
  componentDidMount() {
    this.props.fetchCurrentUser();
  }
  render() {
    if(!this.props.currentUser) {
      return(<p>Loading...</p>)
    }
    return(
      <div>
        <h3>Hello, {this.props.currentUser.email}</h3>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.user.currentUser
  }
}

export default connect(mapStateToProps, { fetchCurrentUser })(CurrentUser)
