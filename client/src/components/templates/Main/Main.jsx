import React from 'react';
import { Switch, Route } from "react-router-dom";

import { ConferencesPage, ConfPage, HomePage } from '../../';

import './Main.less';

const Main = props => {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage onSubmissionsChange={props.onSubmissionsChange} />
      </Route>
      <Route path="/conferences">
        <Route exact path="/conferences" component={ConferencesPage} />
        <Route path="/conferences/:confId" component={ConfPage} />
      </Route>
    </Switch>
  );
};

export default Main;