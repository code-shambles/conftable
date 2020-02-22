import React, { useState } from 'react';
import configureStore from '../../store/configureStore';
import { Provider } from 'react-redux';
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import LS from '../../tool/Ls';

import Header from '../Header';
import Nav from '../Nav';
import Home from '../Home';
import TalkCards from '../TalkCards';

import './App.less';

const store = configureStore();

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
        <Nav />
        <main>
          <Switch>
            <Route  exact={true} path="/">
              <Home onSubmissionsChange={handleSubmissionsChange} />
            </Route>
            <Route  exact={true} path="/talkcards">
              <TalkCards submissions={submissions.submissions} />
            </Route>
          </Switch>
        </main>
      </Router>
    </Provider>
  );
}

export default App;