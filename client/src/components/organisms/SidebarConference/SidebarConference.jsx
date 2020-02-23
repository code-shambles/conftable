import React from 'react';
import { Link } from "react-router-dom";

import { Sidebar } from '../../';

import './SidebarConference.less';

const SidebarConference = ({ conf }) => {
  const navItems = [{
    className: 'conf-home-link',
    path: `/conferences/${conf.id}`,
    exact: true,
    text: conf.name
  }, {
    path: `/conferences/${conf.id}/submissions`,
    text: 'Submissions'
  }, {
    path: `/conferences/${conf.id}/speakers`,
    text: 'Speakers'
  }, {
    path: `/conferences/${conf.id}/talkcards`,
    text: 'Print talk cards'
  }];

  return (
    <Sidebar navItems={navItems} />
  );
};

export default SidebarConference;