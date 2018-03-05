import axios from 'axios';
import { authConstants } from '../constants';
import { alertActions } from './'
import { API_ROOT } from '../api-config';

export const signInUser = ( email, password ) => {
  return (dispatch) => {
    axios.post(`${API_ROOT}/login`, {
      email: email,
      password: password
    }).then(response => {
      // SUCCESS
      localStorage.setItem(authConstants.USER_TOKEN, response.data.auth_token);
      dispatch({ type: authConstants.AUTHORIZED_USER, userToken: response.data.authToken });
    }).catch((error) => {
      // FAILURE
      handleError(error, dispatch);
      return({ type: authConstants.AUTH_ERROR });
    });
  }
}

export const signUpUser = ( email, password, password_confirmation ) => {
  return(dispatch) => {
    axios.post(`${API_ROOT}/signup`, {
      email: email,
      password: password,
      password_confirmation: password_confirmation
    }).then(response => {
      // Success
      localStorage.setItem('user_token', response.data.auth_token);
      dispatch({ type: authConstants.AUTHORIZED_USER });
    }).catch((error) => {
      // FAILURE
      handleError(error, dispatch);
      return({ type: authConstants.AUTH_ERROR });
    });
  }
}

export const signOutUser = () => {
  localStorage.removeItem(authConstants.USER_TOKEN);
  return { type: authConstants.UNAUTHORIZED_USER };
}

export const authError = (error) => {
  return {
    type: authConstants.AUTH_ERROR,
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
