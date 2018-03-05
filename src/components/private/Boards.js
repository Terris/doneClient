import React, { Component } from 'react';

class Boards extends Component {

  componentDidMount() {
  }

  render() {
    return(
      <div>
        <div className="row block__mod">
          <div className="block__card block__board three columns">
            <h2>Travel More</h2>
          </div>
        </div>
        <p>Create a new Board to get started.</p>
      </div>
    )
  }
}

export default Boards
