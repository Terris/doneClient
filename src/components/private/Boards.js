import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBoards, addNewBoard } from '../../actions'

import Board from './Board';

class Boards extends Component {

  componentDidMount() {
    this.props.fetchBoards()
  }

  renderBoards() {
    return _.map(this.props.boards, board => {
      return(
        <Board key={board.id} board={board} />
      )
    });
  }

  addNewBoard = () => {
    this.props.addNewBoard();
  }

  render() {
    if (!this.props.boards) {
      return ( <p>Loading Boards...</p>)
    }
    return(
      <div>
        <p><button onClick={this.addNewBoard}>New Board</button></p>
        <div className="row">
          {this.renderBoards()}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { boards: state.boards }
}
export default connect(mapStateToProps, { fetchBoards, addNewBoard })(Boards)
