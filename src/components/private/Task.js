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

  completeTask = (e) => {
    e.persist();
    this.setState({ completed: (this.state.completed) ? false : true }, () => {
      this.handleSubmit(e);
    })
  }

  deleteTask = () => {
    this.props.deleteTask({task: this.props.task})
  }

  handleSubmit(e) {
    e.preventDefault();
    const task = {
      id: this.props.task.id,
      description: this.state.description,
      completed: this.state.completed
    }
    if(task.description !== "") {
      this.props.updateTask({ task: task });
    } else {
      this.props.deleteTask({task: this.props.task});
    }
    this.descriptionInput.blur();
  }

  handleInputChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  renderCheckBox = () => {
    if(this.state.completed) {
      return ( <i className="fas fa-check-square"></i>)
    } else {
      return ( <i className="far fa-square"></i> )
    }
  }

  render() {
    return(
      <li className={`task task-${(this.state.completed) ? 'complete' : 'incomplete'}`}>
        <button className="task-checkbox" onClick={this.completeTask}></button>
        <form onSubmit={this.handleSubmit} onBlur={this.handleSubmit}>
          <input type="text" name="description" placeholder="description" autoComplete="off"
            ref={input => this.descriptionInput = input}
            value={this.state.description}
            onChange={this.handleInputChange}
            disabled={this.state.completed ? 'disabled' : ''}
          />
        </form>
        <button className="btn-text btn-task-delete" onClick={this.deleteTask}><i className="fas fa-times-circle"></i></button>
      </li>
    )
  }
}

export default connect(null, { updateTask, deleteTask })(Task)
