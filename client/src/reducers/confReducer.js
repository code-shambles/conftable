import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function confReducer(state = initialState, action) {
  switch(action.type) {
    case types.LOAD_CONFS_SUCCESS:
      return action.confs;
    case types.SELECT_CONF:
      return action.selectedConfId;
    default: 
      return state;
  }
}