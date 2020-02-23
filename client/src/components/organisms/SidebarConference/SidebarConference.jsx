import React from 'react';

import { Sidebar } from '../../';

const SidebarConference = props => {
  const navItems = [{
    path: '/submissions',
    text: 'Submissions'
  }, {
    path: '/talkcards',
    text: 'Print talk cards'
  }];
  return <Sidebar navItems={navItems} />;
};

export default SidebarConference;