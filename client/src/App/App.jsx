import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import { Header, Main } from '../components';

import './App.less';

const App = () => {

  return (
    <Router>
      <Header />
      <Main submissions={[]} />
    </Router>
  );
}

export default App;