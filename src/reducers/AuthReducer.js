import { authConstants } from '../constants'

let userToken = localStorage.getItem(authConstants.USER_TOKEN);
const initialState = userToken ? { loggedIn: true } : {}

export default function(state = initialState, action) {
  switch (action.type) {
    case authConstants.AUTHORIZED_USER:
      return {
        loggedIn: true
      }
    case authConstants.UNAUTHORIZED_USER:
      return {}
    case authConstants.AUTH_ERROR:
      return {}
    default:
      return state;
  }
};
