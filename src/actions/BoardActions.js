import axios from 'axios';
import { boardConstants, storageConstants } from '../constants';
import { alertActions } from './';
import { API_ROOT } from '../api-config';

export const fetchBoards = () => {
  return dispatch => {
    axios.get(`${API_ROOT}/boards`, {
      headers: { Authorization: localStorage.getItem(storageConstants.USER_TOKEN) }
    }).then((response) => {
      dispatch({ type: boardConstants.FETCH_BOARDS, boards: response.data})
    }).catch((error) => {
      handleError(error, dispatch);
    });
  }
}

export const addNewBoard = (callback) => {
  return dispatch => {
    axios.post(`${API_ROOT}/boards`, { name: 'New Board' }, {
      headers: { Authorization: localStorage.getItem(storageConstants.USER_TOKEN) }
    }).then((response) => {
      dispatch({ type: boardConstants.NEW_BOARD, board: response.data });
      callback(response.data.id);
    }).catch((error) => {
      handleError(error, dispatch)
    })
  }
}

export const updateBoard = ({ board }) => {
  return dispatch => {
    axios.put(`${API_ROOT}/boards/${board.id}`, { board }, {
      headers: { Authorization: localStorage.getItem(storageConstants.USER_TOKEN) }
    }).then((response) => {
      dispatch({ type: boardConstants.UPDATE_BOARD, board: board})
    }).catch((error) =>{
      handleError(error, dispatch);
    })
  }
}

export const deleteBoard = ({ board }) => {
  return dispatch => {
    axios.delete(`${API_ROOT}/boards/${board.id}`, {
      headers: { Authorization: localStorage.getItem(storageConstants.USER_TOKEN) }
    }).then((response) => {
      dispatch({ type: boardConstants.DELETE_BOARD, board: board})
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
