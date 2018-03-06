import _ from 'lodash';
import { boardConstants } from '../constants'

export default function boards(state = {}, action) {
  switch (action.type) {
    case boardConstants.FETCH_BOARDS:
      return _.mapKeys(action.boards, 'id');
    case boardConstants.NEW_BOARD:
      return { ...state, [action.board.id]: action.board };
    default:
      return state;
  }
};
