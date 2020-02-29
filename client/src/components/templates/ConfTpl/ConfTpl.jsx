import React, { useState } from 'react';
import { Link } from "react-router-dom";

import './ConfTpl.less';

const renderContent = (conf, children) => {
  return conf ? children : (
    <p>Please <Link to={`/conferences`}>select a conference</Link> first.</p>
  );
}

const ConfTpl = ({ conf, pageConfig, children }) => (
  <main key="main" id="conf-page" className={`${pageConfig.key}-page`}>
    <header>
      <h1>{conf ? pageConfig.heading : `${pageConfig.heading} No Conference Selected`}</h1>
    </header>
    {renderContent(conf, children)}
  </main>
);
   
export default ConfTpl;