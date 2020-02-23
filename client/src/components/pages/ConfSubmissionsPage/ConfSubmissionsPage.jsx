import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../redux/actions';

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

function mapStateToProps(state, ownProps) {
  return {
    confs: { ...state.confs, selectedId: ownProps.match.params.confId}
  };
} 

const mapDispatchToProps = dispatch => {
  return {
    onSelectConf: selectedId => dispatch(actions.selectConf(selectedId)),
  };
}
   
export default connect(mapStateToProps, mapDispatchToProps)(ConfSpeakersPage);