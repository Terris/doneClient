import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        <section className="header row">
          <nav className="navigation">
            <ul>
              <li className="logo"><Link to="/">Chief</Link></li>
              <li><Link to="/signin">Signin</Link></li>
            </ul>
          </nav>
        </section>
      </div>
    );
  }
}

export default Header
