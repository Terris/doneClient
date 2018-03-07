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

  renderBoard() {
    if (this.props.editing) {
      return(
        <form onSubmit={this.handleSubmit} onBlur={this.handleSubmit}>
          <fieldset>
            <input type="text" name="name" placeholder="Board name" className="input-h2"
              ref={this.props.nameRef}
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </fieldset>
        </form>
      )
    } else {
      return(
        <h2 onClick={this.editBoard}><span className="editable">{this.props.board.name}</span></h2>
      )
    }
  }

  render() {
    return(
      <div className="four columns">
        <div className="block__mod block__card block__board">
          {this.renderBoard()}
          <Tasks board={this.props.board} />
        </div>
      </div>
    )
  }
}

export default connect(null, { updateBoard, deleteBoard })(Board)
