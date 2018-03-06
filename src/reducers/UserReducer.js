import { userConstants } from '../constants'

export default function user(state = {}, action) {
  switch (action.type) {
    case userConstants.CURRENT_USER:
      return {
        currentUser: action.currentUser
      }
    default:
      return state;
  }
};
