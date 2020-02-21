import React, { useState } from 'react';
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import LS from '../../tool/Ls';

import Nav from '../Nav';
import Home from '../Home';
import TalkCards from '../TalkCards';

import './Site.less';

const LS_KEY = 'cft-submissions';

const initSubmissionsFromLs = () => {
  return LS.getJson(LS_KEY);
};

const Site = props => {

  const [submissions, setSubmissions] = useState(initSubmissionsFromLs());

  const handleSubmissionsChange = json => {
    LS.set(LS_KEY, json);
    setSubmissions(json.submissions);
  };

  return (
    <Router>
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
  );
}

export default Site;