import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function catReducer(state = initialState.confs, action) {
  switch(action.type) {
    case types.LOAD_CONFS_SUCCESS:
      return action.confs
    default: 
      return state;
  }
}