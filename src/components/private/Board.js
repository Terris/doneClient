import React, { Component } from 'react'

class Board extends Component {
  editBoard = () => {
    this.props.onClick(this.props.board.id);
  }
  render() {
    return(
      <div className="three columns">
        <div className="block__mod block__card block__board" onClick={this.editBoard}>
          <h2>{this.props.board.name}</h2>
        </div>
      </div>
    )
  }
}

export default Board
