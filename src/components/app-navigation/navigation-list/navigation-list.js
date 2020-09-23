import React from "react";

import NavigationListItem from "./navigation-list-item";

const NavigationList = () => {
  const navListItem = [
    {
      name: "Главная",
      link: "/",
    },
    {
      name: "Новости",
      link: "/news",
    },
  ];

  const renderListItem = navListItem.map((item) => (
    <NavigationListItem name={item.name} link={item.link} key={item.name}/>
  ));

  return (
    <ul className="header-nav__list">
      {renderListItem}
    </ul>
  );
};

export default NavigationList;
