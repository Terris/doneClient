import { combineReducers } from 'redux';
import alert from './AlertReducer';
import auth from './AuthReducer';
import user from './UserReducer';

const rootReducer = combineReducers({
  alert,
  auth,
  user
});

export default rootReducer;
