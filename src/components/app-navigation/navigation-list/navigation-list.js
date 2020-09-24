import React from "react";

import NavigationListItem from "./navigation-list-item";

const NavigationList = () => {
  const navListItem = [
    {
      name: "Главная",
      link: "/",
      icon: "fas fa-home"
    },
    {
      name: "Новости",
      link: "/news",
      icon: "fas fa-newspaper"
    },
  ];

  const renderListItem = navListItem.map((item) => (
    <NavigationListItem name={item.name} link={item.link} icon={item.icon} key={item.name}/>
  ));

  return (
    <ul className="header-nav__list">
      {renderListItem}
    </ul>
  );
};

export default NavigationList;
