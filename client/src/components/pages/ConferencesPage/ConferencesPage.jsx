import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions/confActions';
import { Link } from "react-router-dom";

import { Button } from '../../';

import './ConferencesPage.less';

const ConferencesPage = props => {

  console.log('props', props);

  function handleSelectConf(confId) {
    props.onSelectConf(confId);
  };

  const list = [];
  //{conf.name} <Link to={`conferences/${conf.id}`}><Button ghost={true} onClick={ () => props.onSelectConf(conf.id) }>Select</Button></Link>

  props.confs.list.forEach(conf => {
    list.push(
      <li key={conf.id} className={props.selectedConfId === conf.id ? 'active' : null}>
        {conf.name} <Button ghost={true} disabled={props.selectedConfId === conf.id} onClick={ () => handleSelectConf(conf.id) }>Select</Button>
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
  console.log('state', state)
  return {
    confs: state.confs,
    selectedConfId: state.selectedConfId
  };
} 

const mapDispatchToProps = dispatch => {

  console.log('actions.selectConf', actions.selectConf);
  return {
    onSelectConf: selectedConfId => dispatch(actions.selectConf(selectedConfId)),
  };
}
   
export default connect(mapStateToProps, mapDispatchToProps)(ConferencesPage);