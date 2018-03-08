import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBoards, fetchTasks, addNewBoard } from '../../actions'

import Board from './Board';

class Boards extends Component {

  constructor(props) {
    super(props);
    this.state = {
      editingBoardID: null
    }
  }

  componentDidMount() {
    this.props.fetchBoards();
    this.props.fetchTasks();
  }

  addNewBoard = () => {
    this.props.addNewBoard((newID) => {
      this.setState({ editingBoardID: newID }, () => { this.name.select() })
    });
  }

  updateBoard = () => {
    this.setState({ editingBoardID: null });
    this.name.blur();
  }

  enableEditing = (id) => {
    this.setState({editingBoardID: id }, () => {
      this.name.focus();
      this.name.setSelectionRange(this.name.value.length, this.name.value.length);
    });
  }

  renderBoards() {
    return _.map(this.props.boards, board => {
      return(
        <Board key={board.id} board={board}
          onClick={this.enableEditing}
          onUpdateBoard={this.updateBoard}
          nameRef={input => this.name = input}
          editing={ (this.state.editingBoardID === board.id) ? true : false }
        />
      )
    });
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
export default connect(mapStateToProps, { fetchBoards, fetchTasks, addNewBoard })(Boards)
