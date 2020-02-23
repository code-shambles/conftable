import React from 'react';

import { Button, SidebarConference } from '../../';

import './ConfTalkCardsPage.less';

const renderCards = submissions => {
  let cards = [];

  if (submissions) {
    let i = 0;
    submissions.filter(sub => sub.state === 'accepted').forEach(sub => {
      cards.push(
        <li key={i++}>
          <h2>{sub.title}</h2>
          <h3>{sub.name}</h3>
        </li>
      );
    });
  }

  return cards;
};

const ConfTalkCardsPage = props => {
  return [
    <SidebarConference key="sidebar" />,
    (
      <main key="talkcards" id="talk-cards">
        <section>
          <h1>Print Talk Cards</h1>
          <ul>{renderCards(props.submissions)}</ul>
          <hr />
          <Button onClick={window.print}>Print</Button>
        </section>
      </main>
    )
  ];
};

export default ConfTalkCardsPage;