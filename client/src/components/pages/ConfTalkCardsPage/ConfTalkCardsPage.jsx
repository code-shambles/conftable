import React from 'react';
import { connect } from 'react-redux';

import { Button, ConfTpl } from '../../';

import './ConfTalkCardsPage.less';

const pageConfig = {
  key: 'conf-talkcards',
  heading: 'Print Talk Cards',
};

const getSelectedConf = confs => {
  return confs && confs.selectedId ? confs.allById[confs.selectedId] : null;
};

const renderCards = conf => {
  let cards = [];
  let i = 0;

  conf.submissions.filter(sub => sub.state === 'accepted').forEach(sub => {
    cards.push(
      <li key={i++}>
        <h2>{sub.title}</h2>
        <h3>{sub.name}</h3>
      </li>
    );
  });

  return [
    <ul>{cards}</ul>,
    <hr />,
    <Button onClick={window.print}>Print</Button>
  ];
};

const renderEmpty = () => (
  <p>No submissions found</p>
);

const ConfTalkCardsPage = ({confs}) => {
  const conf = getSelectedConf(confs);

  const hasSubmissions = conf && conf.submissions && conf.submissions.length;

  return (
    <ConfTpl conf={conf} pageConfig={pageConfig}>
      {hasSubmissions ? renderCards(conf) : renderEmpty()}
    </ConfTpl>
  );
};

const mapStateToProps = (state, ownProps) => ({
  confs: { ...state.confs, selectedId: ownProps.match.params.confId }
});

export default connect(mapStateToProps)(ConfTalkCardsPage);