import axios from 'axios';
import { authTypes } from '../constants';
import { API_ROOT } from '../api-config';

export const signInUser = ( email, password ) => {
  return (dispatch) => {
    axios.post(`${API_ROOT}/login`, {
      email: email,
      password: password
    }).then(response => {
      if(!response.data.auth_token) {
        dispatch(authError(response.data.message));
      } else {
        localStorage.setItem('user_token', response.data.auth_token);
        dispatch({ type: authTypes.AUTHORIZED_USER });
      }
    }).catch((error) => {
      dispatch(authError("Wrong Email/Password Combo"));
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
      localStorage.setItem('user_token', response.data.auth_token);
      dispatch({ type: authTypes.AUTHORIZED_USER });
    }).catch((error) => {
      if (error.response) {
        dispatch(authError(error.response.data.message));
      } else if (error.request) {
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
      console.log(error.config);

    });
  }
}

export const signOutUser = () => {
  localStorage.removeItem('user_token');
  return { type: authTypes.UNAUTHORIZED_USER };
}

export const authError = (error) => {
  return {
    type: authTypes.AUTH_ERROR,
    payload: error
  };
};
