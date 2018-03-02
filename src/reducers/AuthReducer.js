import { authTypes } from '../constants'

let userToken = localStorage.getItem('user_token');
const initialState = userToken ? { loggedIn: true, userToken } : {}

export default function(state = initialState, action) {
  switch (action.type) {
    case authTypes.AUTHORIZED_USER:
      return {
        loggedIn: true
      }
    case authTypes.UNAUTHORIZED_USER:
      return {}
    case authTypes.AUTH_ERROR:
      return { errorMessage: action.payload }
    default:
      return state;
  }
};
