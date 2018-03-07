import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBoards, addNewBoard } from '../../actions'

import Board from './Board';

class Boards extends Component {

  constructor(props) {
    super(props);
    this.state = {
      editingBoardID: null
    }
  }

  componentDidMount() {
    this.props.fetchBoards()
  }

  renderBoards() {
    return _.map(this.props.boards, board => {
      return(
        <Board key={board.id} board={board} onClick={this.enableEditing}
          editing={ (this.state.editingBoardID === board.id) ? true : false }
        />
      )
    });
  }

  addNewBoard = () => {
    this.props.addNewBoard((newID) => {
      this.setState({ editingBoardID: newID })
    });
  }

  enableEditing = (id) => {
    this.setState({editingBoardID: id });
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
