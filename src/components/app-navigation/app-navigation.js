import React from 'react';

import './app-navigation.css';
import NavigationList from './navigation-list/navigation-list';

const Navigation = () => {
  return <nav className="header-nav">
    <NavigationList />
  </nav>
}

export default Navigation;