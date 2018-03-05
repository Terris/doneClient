import axios from 'axios';
import { userConstants, storageConstants.USER_TOKEN } from '../constants';
import { API_ROOT } from '../api-config';

let userToken = localStorage.getItem(USER_TOKEN);

export const getCurrentUser() {
  return dispatch => {

  }
}

export const userError = (error) => {
  return {
    type: userTypes.USER_ERROR,
    payload: error
  };
};

const handleError = (error, dispatch) => {
  if (error.response) {
    return dispatch(userError(error.response.data.message));
  } else if (error.request) {
    return dispatch(userError(error.request));
  } else {
    return dispatch(userError(error.message));
  }
}
