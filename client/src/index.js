import React from 'react';
import { render } from 'react-dom';

import Site from './component/Site';

const rootElement = document.getElementById('app');

render(<Site />, rootElement);