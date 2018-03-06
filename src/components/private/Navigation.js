import React, { Component } from 'react';

import SignOutButton from '../auth/SignOutButton';

export default class Navigation extends Component {

  constructor(props){
    super(props)
    this.state = {
      open: 'closed'
    };
  }

  toggleOpenClosed() {
    const visible = (this.state.open === 'closed') ? 'open' : 'closed'
    this.setState({ open: visible });
  }

  render() {
    return(
      <nav className="primarynav">
        <button className={`btn-text togglebtn ${this.state.open}`} onClick={this.toggleOpenClosed.bind(this)}>
          <i className="fas fa-bars"></i>
        </button>
        <ul className={`navlinks ${this.state.open}`}>
          <li><SignOutButton /></li>
        </ul>
      </nav>
    )
  }
}
