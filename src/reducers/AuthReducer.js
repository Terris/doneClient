import { AUTHORIZED_USER, UNAUTHORIZED_USER, AUTH_ERROR } from '../actions'

let userToken = localStorage.getItem('user_token');
const initialState = userToken ? { loggedIn: true, userToken } : {}

export default function(state = initialState, action) {
  switch (action.type) {
    case AUTHORIZED_USER:
      return {
        loggedIn: true
      }
    case UNAUTHORIZED_USER:
      return {}
    case AUTH_ERROR:
      return { errorMessage: action.payload }
    default:
      return state;
  }
};
