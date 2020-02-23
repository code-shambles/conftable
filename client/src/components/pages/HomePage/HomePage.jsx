import React, { useState } from 'react';

import { Button } from '../../';

import './HomePage.less';

const renderErrorMsg = error => {
  
  if (error) {
    console.error(error);
    return <pre className="error">{error}</pre>;
  }
  else {
    return null;
  }
}

const HomePage = props => {

  const [error, setError] = useState(null);
  const [json, setJson] = useState(null);
  
  const handleJsonChange = ev => {
    try {
      setError(null);
      setJson({ date: Date.now(), submissions: JSON.parse(ev.target.value) });
    }
    catch(e) {
      setError('Error! The JSON could not be parsed. Is it malformed?\r\n\r\n' + e);
    }
  };

  const handleApplyClick = ev => {
    props.onSubmissionsChange = json.submissions;
  }  

  return (
    <main className="home-page">
      <section key="welcome" className="welcome">
        <h1>Conftable!</h1>
        <h3>Comfortable administration for your conference talk proposals and speakers.</h3>
      </section>
      <section key="paste-json" className="paste-json">
        <p>Paste the submissions JSON you downloaded here:</p>
        <textarea onChange={handleJsonChange}></textarea><br />
        {renderErrorMsg(error)}
        <Button onClick={handleApplyClick}>Apply</Button>
      </section>
    </main>
  );
};

export default HomePage;