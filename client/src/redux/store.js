import { createStore, applyMiddleware } from 'redux';
import rootReducer from "./reducers";

//export default createStore(rootReducer);

import thunk from 'redux-thunk';

const configureStore = () => {
  return createStore(
    rootReducer,
    applyMiddleware(thunk)
  );
};

export default configureStore; 