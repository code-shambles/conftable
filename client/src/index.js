import React from 'react';
import { render } from 'react-dom';

import App from './App';

import './style/index.less';

const rootElement = document.getElementById('app');

render(<App />, rootElement);