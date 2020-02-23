import * as types from "../actionTypes";

const initialState = {
  ids: [],
  allById: {},
  selectedId: 'none',
  confs: [],
  users: [],
};


export default function confReducer(state = initialState, action) {
  switch(action.type) {
    case types.LOAD_CONFS_SUCCESS: {
      return {
        ...state,
        ids: action.payload.ids,
        allById: action.payload.allById,
      };
    }
    case types.SELECT_CONF: {
      return {
        ...state,
        selectedId: action.payload,
      };
    }
    default: 
      return state;
  }
}