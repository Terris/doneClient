import _ from 'lodash';
import { taskConstants } from '../constants'

export default function tasks(state = {}, action) {
  switch (action.type) {
    case taskConstants.FETCH_TASKS:
      return _.mapKeys(action.tasks, 'id');
    case taskConstants.NEW_TASK:
      return { ...state, [action.task.id]: action.task };
    case taskConstants.UPDATE_TASK:
      return {...state, [action.task.id]: action.task }
    case taskConstants.DELETE_TASK:
      return _.omit(state, action.task.id)
    default:
      return state;
  }
};
