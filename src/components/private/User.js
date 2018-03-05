import React, { Component } from 'react';
import { connect } from 'react-redux';

class User extends Component {

  componentDidMount(){
    //this.props.fetchUser();
  }

  render() {
    return(
      <h1>User Name Here</h1>
    )
  }
}

export default User
