import React from 'react';
import { NavLink } from "react-router-dom";

import './Sidebar.less';

const renderItems = navItems => {
  const items = [];

  if (navItems) {
    navItems.forEach(navItem => {
      items.push(<li key={navItem.path}><NavLink to={navItem.path} exact={navItem.exact} className={navItem.className}>{navItem.text}</NavLink></li>);
    });
  }

  return items;
}

const Sidebar = ({ navItems, children }) => {
  return(
    <nav className="sidebar">
      {children}
      <ul>
        {renderItems(navItems)}
      </ul>
    </nav>
  )
};

export default Sidebar;