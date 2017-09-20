import React, { Component } from 'react'
import axios from 'axios'

const API_URL = 'http://localhost:3001/api/v1/'

class User extends Component {

  constructor(props) {
    super(props)
    this.state = {
      user: []
    }
  }

  componentDidMount() {
    axios.post(API_URL+'login', {
      email: "test1@email.com",
      password: "foobar"
    })
      .then(response => {
        console.log(response.data)
        this.setState({user: response.data })
      })
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.user.auth_token}
        </ul>
      </div>
    );
  }
}

export default User
