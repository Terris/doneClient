import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUpUser } from '../actions';
import Alert from './Alert';

class SignUp extends Component {

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      password_confirmation: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.signUpUser(this.state.email, this.state.password, this.state.password_confirmation)
  }

  render() {

    if (this.props.loggedIn) {
      return <Redirect to="/private" />
    };

    return(
      <div className="block__card aln-center" style={{width: 300+'px'}}>
        <header>
          <h2>Sign Up</h2>
          <Alert />
        </header>
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <label>Email</label>
            <input name="email" type="email" placeholder="email" value={this.state.email} onChange={this.handleInputChange} required />
          </fieldset>
          <fieldset>
            <label>Password</label>
            <input name="password" type="password" placeholder="password" value={this.state.password} onChange={this.handleInputChange} required />
          </fieldset>
          <fieldset>
            <label>Confirm Password</label>
            <input name="password_confirmation" type="password" placeholder="confirm password" value={this.state.password_confirmation} onChange={this.handleInputChange} required />
          </fieldset>
          <fieldset className="action-group">
            <input type="submit" value="Sign In" />
          </fieldset>
        </form>
        <div className="card_footer">
          <p className="txt-center">Not quite ready? <Link to="/">Cancel</Link></p>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    loggedIn: state.auth.loggedIn,
  }
}

export default connect(mapStateToProps, { signUpUser })(SignUp);
