import { userConstants } from '../constants'

export default function user(state = {}, action) {
  switch (action.type) {
    case userConstants.CURRENT_USER:
      return {
        currentUser: action.currentUser
      }
    case userConstants.USER_ERROR:
      return { errorMessage: action.payload }
    default:
      return state;
  }
};
