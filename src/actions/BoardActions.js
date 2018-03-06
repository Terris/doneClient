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

const handleError = (error, dispatch) => {
  if (error.response) {
    return dispatch(alertActions.error(error.response.data.message));
  } else if (error.request) {
    return dispatch(alertActions.error(error.request));
  } else {
    return dispatch(alertActions.error(error.message));
  }
}
