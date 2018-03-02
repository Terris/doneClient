import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Public extends Component {

  handleSubmit(e) {
    e.preventDefault()
  }

  render() {
    return (
      <div>
        <nav><ul><li><Link to="/signin">Signin</Link></li></ul></nav>
        <h1>Public</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="submit" value="Sign In" />
        </form>
      </div>
    );
  }
}

export default Public;
