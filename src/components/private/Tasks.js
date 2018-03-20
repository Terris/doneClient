import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Task from './Task';
import NewTaskFaker from './NewTaskFaker';

class Tasks extends Component {
  constructor(props) {
    super(props)
    this.addNewTask = this.addNewTask.bind(this);
  }

  addNewTask = () => {
    const task = { board_id: this.props.board.id, description: "task description" }
    this.props.addNewTask({ task });
  }

  renderTasks() {
    return _.map(this.props.tasks, task => {
      if (task.board_id === this.props.board.id && !task.completed ) {
        return(
          <Task key={task.id} task={task}
            descriptionRef={input => this.description = input}
          />
        )
      }
    });
  }

  renderCompletedTasks() {
    return _.map(this.props.tasks, task => {
      if (task.board_id === this.props.board.id && task.completed ) {
        return(
          <Task key={task.id} task={task} />
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
        <ul className="tasks">
          {this.renderTasks()}
          <NewTaskFaker board={this.props.board} />
        </ul>
        <ul className="tasks">
          {this.renderCompletedTasks()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { tasks: state.tasks }
}
export default connect(mapStateToProps)(Tasks)
