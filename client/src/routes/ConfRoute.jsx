import React from 'react';
import { Switch, Route } from "react-router-dom";

import { ConfIndexPage, ConfSubmissionsPage, ConfSpeakersPage, ConfTalkCardsPage, SidebarConference } from '../components';

const ConfRoute = () => [
  <SidebarConference key="sidebar" />, 
  <Switch key="switch">
    <Route path="/conferences/:confId">
      <Route exact path="/conferences/:confId" component={ConfIndexPage} />
      <Route path="/conferences/:confId/submissions" component={ConfSubmissionsPage} />
      <Route path="/conferences/:confId/speakers" component={ConfSpeakersPage} />
      <Route path="/conferences/:confId/talkcards" component={ConfTalkCardsPage} />
    </Route>
  </Switch>
];
   
export default ConfRoute;