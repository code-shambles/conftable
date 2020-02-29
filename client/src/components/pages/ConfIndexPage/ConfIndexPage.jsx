import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import { ConfTpl } from '../../';

import './ConfIndexPage.less';

const getSelectedConf = (confs) => {
  return confs && confs.selectedId ? confs.allById[confs.selectedId] : null;
};

const renderMenu = conf => {
  return conf ? (
    <ul>
      <li>
        <Link to={`/conferences/${conf.id}/submissions`}>
          Submissions
        </Link>
      </li>
      <li>
        <Link to={`/conferences/${conf.id}/speakers`}>
          Speakers
        </Link>
      </li>
    </ul>
  ) : null;
};

const ConfIndexPage = ({ confs }) => {

  const conf = getSelectedConf(confs);

  const pageConfig = {
    key: 'conf-home',
    heading: conf ? conf.name : '',
  };

  return (
    <ConfTpl conf={conf} pageConfig={pageConfig}>
      {renderMenu(conf)}
    </ConfTpl>
  );
};

const mapStateToProps = (state, ownProps) => ({
  confs: { ...state.confs, selectedId: ownProps.match.params.confId }
});
   
export default connect(mapStateToProps)(ConfIndexPage);