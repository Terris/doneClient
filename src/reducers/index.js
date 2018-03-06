import { combineReducers } from 'redux';
import alert from './AlertReducer';
import auth from './AuthReducer';
import user from './UserReducer';
import boards from './BoardsReducer';

const rootReducer = combineReducers({
  alert,
  auth,
  user,
  boards
});

export default rootReducer;
