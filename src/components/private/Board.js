import React, { Component } from 'react'

class Board extends Component {
  render() {
    return(
      <div className="three columns">
        <div className="block__mod block__card block__board">
          <h2>{this.props.board.name}</h2>
        </div>
      </div>
    )
  }
}

export default Board
