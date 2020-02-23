import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../redux/actions';
import { Link } from "react-router-dom";

import { Button } from '../../';

import './ConferencesPage.less';

const ConferencesPage = props => {

  function handleSelectConf(confId) {
    props.onSelectConf(confId);
  };

  const list = props.confs.ids.map(confId => {
    const conf = props.confs.allById[confId];

    return (
      <li key={confId} className={props.confs.selectedId === confId ? 'active' : null}>
        <Link to={`conferences/${confId}`}>
          {conf.name}
        </Link>
        <Button ghost={true} disabled={props.confs.selectedId === confId} onClick={ () => handleSelectConf(confId) }>Select</Button>
      </li>
    )
  });

  return (
    <main>
      <section>
        <h1>Conferences</h1>
        <p>Select the conference you'd like to work with!</p>
        <ul>
          {list}
        </ul>
      </section>
    </main>
  );
};

function mapStateToProps(state, ownProps) {
  return {
    confs: state.confs
  };
} 

const mapDispatchToProps = dispatch => {

  return {
    onSelectConf: selectedId => dispatch(actions.selectConf(selectedId)),
  };
}
   
export default connect(mapStateToProps, mapDispatchToProps)(ConferencesPage);