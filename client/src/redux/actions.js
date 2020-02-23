import * as types from './actionTypes';
import { getAllConfs } from '../api/confApi';

export function loadConfs() {
  return function(dispatch) {
    return getAllConfs().then(confs => {
      dispatch(loadConfsSuccess(confs));
    }).catch(error => {
      throw(error);
    });
  };
};

export function loadConfsSuccess(confs) {
  return { 
    type: types.LOAD_CONFS_SUCCESS, 
    payload: confs
  };
};

export function selectConf(selectedId) {
  return { 
    type: types.SELECT_CONF, 
    payload: selectedId 
  };
};