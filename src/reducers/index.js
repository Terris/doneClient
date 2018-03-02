import { combineReducers } from 'redux';
import GoalsReducer from './GoalsReducer'

const rootReducer = combineReducers({
  goals: GoalsReducer
});

export default rootReducer;
