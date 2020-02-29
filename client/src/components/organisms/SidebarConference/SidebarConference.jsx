import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";

import { Sidebar } from '../../';

import './SidebarConference.less';

const getSelectedConf = (confs) => {
  return confs && confs.selectedId ? confs.allById[confs.selectedId] : null;
};

const SidebarConference = ({ confs }) => {

  const conf = getSelectedConf(confs);
  const navItems = conf ? [{
    className: 'conf-home-link',
    path: `/conferences/${conf.id}`,
    exact: true,
    text: conf.name
  }, {
    path: `/conferences/${conf.id}/submissions`,
    text: 'Submissions'
  }, {
    path: `/conferences/${conf.id}/speakers`,
    text: 'Speakers'
  }, {
    path: `/conferences/${conf.id}/talkcards`,
    text: 'Print talk cards'
  }] : null;

  return (
    <Sidebar navItems={navItems} />
  );
};

function mapStateToProps(state, ownProps) {
  return {
    confs: { ...state.confs, selectedId: ownProps.computedMatch.params.confId }
  };
}
   
export default connect(mapStateToProps)(withRouter(SidebarConference));