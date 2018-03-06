import _ from 'lodash';
import { boardConstants } from '../constants'

export default function boards(state = {}, action) {
  switch (action.type) {
    case boardConstants.FETCH_BOARDS:
      return {
        boards: _.mapKeys(action.boards, 'id')
      }
    default:
      return state;
  }
};
