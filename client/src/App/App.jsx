import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import MainRoute from '../routes/MainRoute.jsx';
import { Header } from '../components';

import './App.less';

const App = () => {

  return (
    <Router>
      <Header />
      <MainRoute />
    </Router>
  );
}

export default App;