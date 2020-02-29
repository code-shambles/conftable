import React, { useState } from 'react';
import { connect } from 'react-redux';

import { ConfTpl } from '../../';

import './ConfSubmissionsPage.less';

const pageConfig = {
  key: 'conf-submissions',
  heading: 'Submissions',
};

const getSelectedConf = confs => {
  return confs && confs.selectedId ? confs.allById[confs.selectedId] : null;
};

const ConfSpeakersPage = ({ confs }) => {
  const conf = getSelectedConf(confs);

  return (
    <ConfTpl conf={conf} pageConfig={pageConfig}>
      <p>All talk proposals for this conference</p>
    </ConfTpl>
  );
};

const mapStateToProps = (state, ownProps) => ({
  confs: { ...state.confs, selectedId: ownProps.match.params.confId }
});

export default connect(mapStateToProps)(ConfSpeakersPage);