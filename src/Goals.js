import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signOutUser } from './actions';

class Protected extends Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.signOutUser();
  }

  render() {
    return(
      <div>
        <h1>Protected</h1>
        <button onClick={this.handleClick}>Sign Out</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { signin: state.signin };
}

export default connect(mapStateToProps, { signOutUser } )( Protected );
