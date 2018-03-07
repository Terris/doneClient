import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTasks, addNewTask } from '../../actions'

import Task from './Task';


class Tasks extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editingTaskID: null
    }
  }

  componentDidMount() {
    this.props.fetchTasks();
  }

  addNewTask = () => {
    this.props.addNewTask((newID) => {
      this.setState({ editingTaskID: newID }, () => {this.description.select()});
    });
  }

  updateTask = () => {
    this.setState({ editingTaskID: null });
  }

  enableEditing = (id) => {
    this.setState({editingTaskID: id }, () => { this.description.focus()});
  }

  renderTasks() {
    return _.map(this.props.tasks, task => {
      return(
        <Task key={task.id} task={task}
          onClick={this.enableEditing}
          onUpdateTask={this.updateTask}
          descriptionRef={input => this.description = input}
          editing={ (this.state.editingTaskID === task.id) ? true : false }
        />
      )
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
export default connect(mapStateToProps, {fetchTasks, addNewTask})(Tasks)
