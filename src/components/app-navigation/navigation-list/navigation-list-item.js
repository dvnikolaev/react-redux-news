import React from "react";
import { NavLink } from "react-router-dom";

const NavigationListItem = ({ name, link, icon }) => {
  return (
    <li className="header-nav__item">
      <NavLink
        exact
        to={link} 
        className="header-nav__link"
        activeClassName="header-nav__link--active"><i className={icon}></i> <span className="icon__text">{name}</span></NavLink>
    </li>
  );
};

export default NavigationListItem;
