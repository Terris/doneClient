import { userTypes } from '../constants'

export default function(state = {}, action) {
  switch (action.type) {
    case userTypes.EDIT_USER:
      return {}
    case userTypes.USER_ERROR:
      return { errorMessage: action.payload }
    default:
      return state;
  }
};
