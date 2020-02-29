import React from 'react';
import { Switch, Route } from "react-router-dom";

import ConfRoute from './ConfRoute.jsx';
import { ConferencesPage, HomePage } from '../components';

const MainRoute = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/conferences">
        <Route exact path="/conferences" component={ConferencesPage} />
        <Route path="/conferences/:confId" component={ConfRoute} />
      </Route>
    </Switch>
  );
};

export default MainRoute;