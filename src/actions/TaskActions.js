import axios from 'axios';
import { taskConstants, storageConstants } from '../constants';
import { alertActions } from './';
import { API_ROOT } from '../api-config';

export const fetchTasks = () => {
  return dispatch => {
    axios.get(`${API_ROOT}/tasks`, {
      headers: { Authorization: localStorage.getItem(storageConstants.USER_TOKEN) }
    }).then((response) => {
      dispatch({ type: taskConstants.FETCH_TASKS, tasks: response.data})
    }).catch((error) => {
      handleError(error, dispatch);
    });
  }
}

export const addNewTask = ( board, callback) => {
  return dispatch => {
    axios.post(`${API_ROOT}/tasks`, { board_id: board.id, description: "Task description"}, {
      headers: { Authorization: localStorage.getItem(storageConstants.USER_TOKEN) }
    }).then((response) => {
      dispatch({ type: taskConstants.NEW_TASK, task: response.data });
      callback(response.data.id);
    }).catch((error) => {
      handleError(error, dispatch);
    })
  }
}

export const updateTask = ({ task }) => {
  return dispatch => {
    axios.put(`${API_ROOT}/tasks/${task.id}`, { task }, {
      headers: { Authorization: localStorage.getItem(storageConstants.USER_TOKEN) }
    }).then((response) => {
      dispatch({ type: taskConstants.UPDATE_TASK, task: response.data})
    }).catch((error) =>{
      handleError(error, dispatch);
    })
  }
}

export const deleteTask = ({ task }) => {
  return dispatch => {
    axios.delete(`${API_ROOT}/tasks/${task.id}`, {
      headers: { Authorization: localStorage.getItem(storageConstants.USER_TOKEN) }
    }).then((response) => {
      dispatch({ type: taskConstants.DELETE_TASK, task: task})
    }).catch((error) => {
      handleError(error, dispatch)
    })
  }
}

const handleError = (error, dispatch) => {
  if (error.response) {
    return dispatch(alertActions.error(error.response.data.message));
  } else if (error.request) {
    return dispatch(alertActions.error(error.request));
  } else {
    return dispatch(alertActions.error(error.message));
  }
}
