import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { addNewBoard } from '../../actions';

class NewBoard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const board = { name: this.state.name }
    if(board.name !== ""){
      this.props.addNewBoard({ board }, (board) => {
        this.setState({ name: '' })
        this.props.history.push(`/user/boards/${board.id}`)
      });
    }
  }



  render() {
    return(
      <div className="layout_boards_main">
        <div className="block__board">
          <div className="board-header">
            <hr />
            <form onSubmit={this.handleSubmit} onBlur={this.handleSubmit}>
              <fieldset className="board-header">
                <input type="text" name="name" placeholder="New Board" className="input-h2" autoComplete="off"
                  ref={this.props.nameRef}
                  value={this.state.name}
                  onChange={this.handleInputChange}
                />
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(null, { addNewBoard })(NewBoard)
