import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateTask, deleteTask } from '../../actions';

class Task extends Component {
  constructor(props){
    super(props)
    this.state = {
      description: this.props.task.description,
      completed: this.props.task.completed
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  editTask = () => {
    this.props.onClick(this.props.task.id);
  }

  deleteTask = () => {
    this.props.deleteTask({task: this.props.task})
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onUpdateTask();
    const task = {
      id: this.props.task.id,
      description: this.state.description,
      completed: this.state.completed
    }
    this.props.updateTask({ task: task });
  }

  handleInputChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {

    return(
      <li className="task">
        <button className="btn-text task-checkbox"><i className="far fa-square"></i></button>
        <form onSubmit={this.handleSubmit} onBlur={this.handleSubmit}>
          <input type="text" name="description" placeholder="description" autoComplete="off"
            ref={this.props.descriptionRef}
            value={this.state.description}
            onChange={this.handleInputChange} />
        </form>
      </li>
    )
  }
}

export default connect(null, { updateTask, deleteTask })(Task)
