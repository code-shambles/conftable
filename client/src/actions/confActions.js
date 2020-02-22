import * as types from './actionTypes';
import confApi from '../api/confApi';

const loadConfs = () => {
  return function(dispatch) {
    return confsApi.getAllConfs().then(confs => {
      dispatch(loadConfsSuccess(confs));
    }).catch(error => {
      throw(error);
    });
  };
};

const loadConfsSuccess = confs => {
  return {type: actionTypes.LOAD_CONFS_SUCCESS, confs};
};

export { loadConfs, loadConfsSuccess };