import React from "react";

import "./news-list.css";
import NewsListIsAccept from "./news-list-is-accept";
import NewsListIsNotAccept from "./news-list-is-not-accept";

const NewsList = ({search}) => {
  return (
    <>
      <NewsListIsNotAccept search={search}/>
      <NewsListIsAccept search={search}/>
    </>
  );
};

export default NewsList;
