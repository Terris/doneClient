import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signInUser } from './actions';

class Public extends Component {

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  };

  handleSubmit(e) {
    e.preventDefault();
    this.props.signInUser(this.state.email, this.state.password);
  };

  handleInputChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  renderError() {
    if (this.props.errorMessage) {
      return (
        <div>
          <p>{this.props.errorMessage}</p>
        </div>
      );
    }
  };

  render() {

    if (this.props.loggedIn) {
      return <Redirect to="/private" />
    };

    return (
      <div>
        <h1>Public</h1>
        {this.renderError()}
        <form onSubmit={this.handleSubmit}>
          <input name="email" type="email" placeholder="email" value={this.state.email} onChange={this.handleInputChange} />
          <input name="password" type="password" placeholder="password" value={this.state.password} onChange={this.handleInputChange} />
          <input type="submit" value="Sign In" />
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    loggedIn: state.authentication.loggedIn,
    errorMessage: state.authentication.errorMessage
  }
}

export default connect(mapStateToProps, { signInUser })(Public);
