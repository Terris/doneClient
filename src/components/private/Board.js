import React, { Component } from 'react'
import { connect } from 'react-redux';
import { updateBoard, deleteBoard } from '../../actions';

import Tasks from './Tasks'

class Board extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: this.props.board.name
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  editBoard = () => {
    this.props.onClick(this.props.board.id);
  }

  deleteBoard = () => {
    if (window.confirm('Are you sure?')){
      this.props.deleteBoard({board: this.props.board})
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onUpdateBoard();
    const board = {
      id: this.props.board.id,
      name: this.state.name,
    }
    this.props.updateBoard({ board: board });
  }

  handleInputChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    return(
      <div className="block__board" style={{maxWidth: 550+"px", }}>
        <div className="board-header">
          <form onSubmit={this.handleSubmit} onBlur={this.handleSubmit}>
            <fieldset className="board-header">
              <input type="text" name="name" placeholder="Board name" className="input-h2" autoComplete="off"
                ref={this.props.nameRef}
                value={this.state.name}
                onChange={this.handleInputChange}
              />
            </fieldset>
          </form>
          <button className="btn-text btn-board-delete" onClick={this.deleteBoard}><i className="far fa-trash-alt"></i></button>
        </div>
        <Tasks board={this.props.board} />
      </div>
    )
  }
}

export default connect(null, { updateBoard, deleteBoard })(Board)
