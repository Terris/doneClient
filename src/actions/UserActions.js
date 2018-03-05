import axios from 'axios';
import { userConstants, storageConstants } from '../constants';
import { alertActions } from './'
import { API_ROOT } from '../api-config';

let userToken = localStorage.getItem(storageConstants.USER_TOKEN);

export const fetchCurrentUser = () => {
  return dispatch => {
    axios.get(`${API_ROOT}/user`, {
      headers: { Authorization: userToken }
    })
    .then((response) => {
      dispatch({ type: userConstants.CURRENT_USER, currentUser: response.data })
    }).catch((error) => {
      handleError(error, dispatch);
    })
  }
}

export const userError = (error) => {
  return {
    type: userConstants.USER_ERROR,
    payload: error
  };
};

const handleError = (error, dispatch) => {
  if (error.response) {
    return dispatch(alertActions.error(error.response.data.message));
  } else if (error.request) {
    return dispatch(alertActions.error(error.request));
  } else {
    return dispatch(alertActions.error(error.message));
  }
}
