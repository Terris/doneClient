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
    this.description.blur();
  }

  enableEditing = (id) => {
    this.setState({editingTaskID: id }, () => {
      this.description.focus();
      this.description.setSelectionRange(this.description.value.length, this.description.value.length)
    });
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
        <ul className="tasks">
          {this.renderTasks()}
        </ul>
        <p className="txt-right"><button onClick={this.addNewTask} className="btn-new-task"><i className="fas fa-plus"></i></button></p>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { tasks: state.tasks }
}
export default connect(mapStateToProps, {addNewTask})(Tasks)
