import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../redux/actions';
import { Link } from "react-router-dom";
import { Switch, Route } from "react-router-dom";

import { ConfIndexPage, ConfSubmissionsPage, ConfSpeakersPage, ConfTalkCardsPage, SidebarConference } from '../../';

import './ConfPage.less';

const getSelectedConf = (confs) => {
  return confs && confs.selectedId ? confs.allById[confs.selectedId] : null;
};

const renderSidebar = conf => {
  return conf ? <SidebarConference key="sidebar" conf={conf} /> : null;
};

const renderSubPages = () => {
  return (
    <Switch key="subpages">
      <Route path="/conferences/:confId">
        <Route exact path="/conferences/:confId" component={ConfIndexPage} />
        <Route path="/conferences/:confId/submissions" component={ConfSubmissionsPage} />
        <Route path="/conferences/:confId/speakers" component={ConfSpeakersPage} />
        <Route path="/conferences/:confId/talkcards" component={ConfTalkCardsPage} />
      </Route>
    </Switch>
  );
};

const ConfPage = ({ confs }) => {

  const conf = getSelectedConf(confs);

  return [
    renderSidebar(conf),
    renderSubPages()
  ];
};

function mapStateToProps(state, ownProps) {
  return {
    confs: { ...state.confs, selectedId: ownProps.match.params.confId }
  };
}
   
export default connect(mapStateToProps)(ConfPage);