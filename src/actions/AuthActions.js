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
