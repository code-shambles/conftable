import React, { useState } from 'react';
import configureStore from '../store/configureStore';
import { Provider } from 'react-redux';
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import { loadConfs } from '../actions/confActions';

import LS from '../tool/Ls';

import { Header, Main } from '../components';

import './App.less';

const store = configureStore();
store.dispatch(loadConfs());

const LS_KEY = 'cft-submissions';

const initSubmissionsFromLs = () => {
  return LS.getJson(LS_KEY);
};

const App = () => {

  const [submissions, setSubmissions] = useState(initSubmissionsFromLs());

  const handleSubmissionsChange = json => {
    LS.set(LS_KEY, json);
    setSubmissions(json.submissions);
  };

  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Main onSubmissionsChange={handleSubmissionsChange} submissions={submissions} />
      </Router>
    </Provider>
  );
}

export default App;