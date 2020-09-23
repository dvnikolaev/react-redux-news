import React from "react";
import { Link } from "react-router-dom";

import './app-header.css';
import Navigation from '../app-navigation/app-navigation';

const Header = () => {
  return <header className="page__header">
    
    <h1 className="logo"><Link to="/" className="logo__link">React News</Link></h1>
    <Navigation />
  </header>;
};

export default Header;
