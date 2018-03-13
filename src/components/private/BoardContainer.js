import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBoards, fetchTasks, addNewBoard } from '../../actions'

import Board from './Board';

class BoardContainer extends Component {

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

  deleteBoard = () => {
    this.props.history.push('/user')
  }

  enableEditing = (id) => {
    this.setState({editingBoardID: id }, () => {
      this.name.focus();
      this.name.setSelectionRange(this.name.value.length, this.name.value.length);
    });
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
          onClick={this.enableEditing}
          onUpdateBoard={this.updateBoard}
          onDeleteBoard={this.deleteBoard}
          nameRef={input => this.name = input}
          editing={ (this.state.editingBoardID === this.props.board.id) ? true : false }
        />
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return { board: state.boards[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchBoards, fetchTasks, addNewBoard })(BoardContainer)
