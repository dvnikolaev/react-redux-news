import React from "react";
import { NavLink } from "react-router-dom";

const NavigationListItem = ({ name, link }) => {
  return (
    <li className="header-nav__item">
      <NavLink
        exact
        to={link} 
        className="header-nav__link"
        activeClassName="header-nav__link--active">{name}</NavLink>
    </li>
  );
};

export default NavigationListItem;
