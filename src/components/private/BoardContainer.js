import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBoards, fetchTasks, addNewBoard } from '../../actions'

import Board from './Board';

class BoardContainer extends Component {

  componentDidMount() {
    this.props.fetchBoards();
    this.props.fetchTasks();
  }

  addNewBoard = () => {
    this.props.addNewBoard();
  }

  updateBoard = () => {
    this.name.blur();
  }

  deleteBoard = () => {
    this.props.history.push('/user')
  }

  render() {
    if (!this.props.board) {
      return (
        <div className="layout_boards_main">
          <hr />
          <p>Loading Board...</p>
        </div>
      )
    }
    return(
      <div className="layout_boards_main">
        <hr />
        <Board key={this.props.board.id}
          board={this.props.board}
          onUpdateBoard={this.updateBoard}
          onDeleteBoard={this.deleteBoard}
          nameRef={input => this.name = input}
        />
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return { board: state.boards[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchBoards, fetchTasks, addNewBoard })(BoardContainer)
