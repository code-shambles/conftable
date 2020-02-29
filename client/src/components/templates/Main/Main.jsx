import React from 'react';
import { Switch, Route } from "react-router-dom";

import { ConferencesPage, ConfPage, HomePage } from '../../';

import './Main.less';

const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/conferences">
        <Route exact path="/conferences" component={ConferencesPage} />
        <Route path="/conferences/:confId" component={ConfPage} />
      </Route>
    </Switch>
  );
};

export default Main;