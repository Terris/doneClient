import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signInUser } from '../../actions';
import Alert from '../Alert';

class SignIn extends Component {

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  };

  handleInputChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signInUser(this.state.email, this.state.password);
  };

  render() {

    if (this.props.loggedIn) {
      return <Redirect to="/private" />
    };

    return (

      <div className="block__card aln-center" style={{width: 300+'px'}}>
        <header>
          <h2>Sign In</h2>
          <Alert />
          <form onSubmit={this.handleSubmit}>
            <fieldset>
              <label>Email</label>
              <input name="email" type="email" placeholder="email" value={this.state.email} onChange={this.handleInputChange} required />
            </fieldset>
            <fieldset>
              <label>Password</label>
              <input name="password" type="password" placeholder="password" value={this.state.password} onChange={this.handleInputChange} required />
            </fieldset>
            <fieldset className="action-group">
              <input type="submit" value="Sign In" />
            </fieldset>
          </form>
          <div className="card_footer">
            <p className="txt-center">New user? <Link to="/signup">Sign Up</Link></p>
          </div>
        </header>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    loggedIn: state.auth.loggedIn,
  }
}

export default connect(mapStateToProps, { signInUser })(SignIn);
