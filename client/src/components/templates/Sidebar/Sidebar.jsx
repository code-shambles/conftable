import React from 'react';
import { NavLink } from "react-router-dom";

import './Sidebar.less';

const renderItems = navItems => {
  const items = [];

  navItems.forEach(navItem => {
    items.push(<li key={navItem.path}><NavLink to={navItem.path}>{navItem.text}</NavLink></li>);
  });

  return items;
}

const Sidebar = ({ navItems, children }) => {
  return(
    <nav className="sidebar">
      <ul>
        {renderItems(navItems)}
      </ul>
      {children}
    </nav>
  )
};

export default Sidebar;