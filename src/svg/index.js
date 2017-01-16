import React from 'react';

import Logo from './Logo';
import Dropdown from './Dropdown';
import Search from './Search';

export const getIcon = icon => ({
  Logo: <Logo/>,
  Search: <Search/>,
  Dropdown: <Dropdown/>
})[icon];
