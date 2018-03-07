import { combineReducers } from 'redux';
import alert from './AlertReducer';
import auth from './AuthReducer';
import user from './UserReducer';
import boards from './BoardsReducer';
import tasks from './TaskReducer';

const rootReducer = combineReducers({
  alert,
  auth,
  user,
  boards,
  tasks
});

export default rootReducer;
