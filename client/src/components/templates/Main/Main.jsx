import React from 'react';
import { Switch, Route } from "react-router-dom";

import { ConferencesPage, HomePage, TalkCardsPage } from '../../';

import './Main.less';

const Main = props => {
  return (
    <Switch>
      <Route  exact={true} path="/">
        <HomePage onSubmissionsChange={props.onSubmissionsChange} />
      </Route>
      <Route  exact={true} path="/conferences">
        <ConferencesPage submissions={props.submissions.submissions} />
      </Route>
      <Route  exact={true} path="/talkcards">
        <TalkCardsPage submissions={props.submissions.submissions} />
      </Route>
    </Switch>
  );
};

export default Main;