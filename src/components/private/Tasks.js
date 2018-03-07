import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNewTask } from '../../actions'

import Task from './Task';

class Tasks extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editingTaskID: null
    }
    this.addNewTask = this.addNewTask.bind(this);
    this.onUpdateTask = this.onUpdateTask.bind(this);
  }
  componentDidMount(){

  };

  addNewTask = () => {
    const task = { board_id: this.props.board.id, description: "task description" }
    this.props.addNewTask({ task }, (newTaskID) => {
      this.setState({ editingTaskID: newTaskID }, () => {this.description.select()});
    });
  }

  onUpdateTask() {
    this.setState({ editingTaskID: null });
  }

  enableEditing = (id) => {
    this.setState({editingTaskID: id }, () => { this.description.focus()});
  }

  renderTasks() {
    return _.map(this.props.tasks, task => {
      if (task.board_id === this.props.board.id ) {
        return(
          <Task key={task.id} task={task}
            onClick={this.enableEditing}
            onUpdateTask={this.onUpdateTask}
            descriptionRef={input => this.description = input}
            editing={ (this.state.editingTaskID === task.id) ? true : false }
          />
        )
      }
    });
  }

  render() {
    if (!this.props.tasks) {
      return <p>Loading tasks...</p>
    }
    return (
      <div>
        <p><button onClick={this.addNewTask}>New Task</button></p>
        <ul className="tasks">
          {this.renderTasks()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { tasks: state.tasks }
}
export default connect(mapStateToProps, {addNewTask})(Tasks)
