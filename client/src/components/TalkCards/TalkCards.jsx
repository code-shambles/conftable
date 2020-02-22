import React from 'react';

import Button from '../Button';

import './TalkCards.less';

const renderCards = submissions => {
  let cards = [];

  if (submissions) {
    let i = 0;
    submissions.filter(sub => sub.state === 'accepted').forEach(sub => {
      console.log(sub);
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

const TalkCards = props => {
  return (
    <section className="talk-cards">
      <h1>Print Talk Cards</h1>
      <ul>{renderCards(props.submissions)}</ul>
      <hr />
      <Button onClick={window.print}>Print</Button>
    </section>
  )
};

export default TalkCards;