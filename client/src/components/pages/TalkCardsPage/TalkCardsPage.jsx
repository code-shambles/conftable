import React from 'react';

import { Button, SidebarConference } from '../../';

import './TalkCardsPage.less';

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

const TalkCardsPage = props => {
  return [
    <SidebarConference key="sidebar" />,
    (
      <main key="main" className="talk-cards-page">
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

export default TalkCardsPage;