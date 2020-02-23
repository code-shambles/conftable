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
  console.log('success', confs)
  return { type: types.LOAD_CONFS_SUCCESS, confs: { list: confs } };
};

export function selectConf(selectedConfId) {
  console.log('> selectConf', arguments);
  return { type: types.SELECT_CONF, selectedConfId: selectedConfId };
};