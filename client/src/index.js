import React from 'react';
import { render } from 'react-dom';

import configureStore from './redux/store';
import { Provider } from 'react-redux';

import { loadConfs } from './redux/actions';

import App from './App';

import './style/index.less';

const store = configureStore();
store.dispatch(loadConfs());

const rootElement = document.getElementById('app');

render (<Provider store={store}><App /></Provider>, rootElement);