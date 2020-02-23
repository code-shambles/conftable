import { combineReducers } from 'redux';
import confs from './confReducer';

const rootReducer = combineReducers({
  // short hand property names
  confs,
});

export default rootReducer;