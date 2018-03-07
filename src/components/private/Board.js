import React, { Component } from 'react'
import { connect } from 'react-redux';
import { updateBoard, deleteBoard } from '../../actions';

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

  render() {
    if (this.props.editing) {
      return(
        <div className="three columns">
          <div className="block__mod block__card block__board">
            <form onSubmit={this.handleSubmit} onBlur={this.handleSubmit}>
              <fieldset>
                <input type="text" name="name" placeholder="Board name" className="input-h2"
                  ref={this.props.nameRef}
                  value={this.state.name}
                  onChange={this.handleInputChange}
                />
              </fieldset>

            </form>
          </div>
        </div>
      )
    }
    return(
      <div className="three columns">
        <div className="block__mod block__card block__board">
          <h2>{this.props.board.name}</h2>
        </div>
      </div>
    )
  }
}

export default connect(null, { updateBoard, deleteBoard })(Board)
