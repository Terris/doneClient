import _ from 'lodash';
import { FETCH_GOALS } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_GOALS:
      return _.mapKeys(action.payload.data, 'id');
    default:
      return state;
  }
}
