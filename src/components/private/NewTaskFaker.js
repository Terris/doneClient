import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNewTask } from '../../actions';

class NewTaskFaker extends Component {

  constructor(props) {
    super(props)
    this.state = {
      description: ''
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
    const task = { board_id: this.props.board.id, description: this.state.description }
    this.props.addNewTask({ task }, () => {
      this.setState({ description: '' })
    });
  }

  render() {
    return(
      <li className="task task-faker">
        <button className="btn-text task-checkbox"><i className="far fa-square"></i></button>
        <form onSubmit={this.handleSubmit} onBlur={this.handleSubmit}>
          <input type="text" name="description" placeholder="new task" autoComplete="off"
            ref={this.props.descriptionRef}
            value={this.state.description}
            onChange={this.handleInputChange} />
        </form>
        <button className="btn-text btn-task-delete" onClick={this.deleteTask}><i className="fas fa-times-circle"></i></button>
      </li>
    )
  }

}

export default connect(null, { addNewTask })(NewTaskFaker);
