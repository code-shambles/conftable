import React from 'react';
import { HashRouter as Router, NavLink } from "react-router-dom";

import './Nav.less';

const MenuLink = props => {
  return <NavLink {...props} exact={true} activeClassName="active"/>
}

const renderItems = props => {
  const items = [
    <li key="/"><MenuLink to="/">Home</MenuLink></li>,
    <li key="talkcards"><MenuLink to="/talkcards">Print talk cards</MenuLink></li>
  ];

  return items;
}

const Nav = props => {
  return(
    <nav className="nav-main">
      <ul>
        <Router>
          {renderItems(props)}
        </Router>
      </ul>
    </nav>
  )
};

export default Nav;