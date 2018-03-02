import axios from 'axios';

export const AUTHORIZED_USER = "AUTHORIZED_USER";
export const UNAUTHORIZED_USER = "UNAUTHORIZED_USER";
export const AUTH_ERROR = "AUTH_ERROR";

const AUTH_URL = 'http://localhost:3001/auth';
const USER_TOKEN = 'user_token';

export const signInUser = ( email, password ) => {
  return (dispatch) => {
    axios.post(`${AUTH_URL}/login`, {
      email: email,
      password: password
    }).then(response => {
      if(!response.data.auth_token) {
        dispatch(authError(response.data.message));
      } else {
        localStorage.setItem('user_token', response.data.auth_token);
        dispatch({ type: AUTHORIZED_USER });
      }
    }).catch((error) => {
      dispatch(authError("Wrong Email/Password Combo"));
    });
  }
}

export const signOutUser = () => {
  localStorage.removeItem(USER_TOKEN);
  return { type: UNAUTHORIZED_USER };
}

export const authError = (error) => {
  return {
    type: AUTH_ERROR,
    payload: error
  };
};
