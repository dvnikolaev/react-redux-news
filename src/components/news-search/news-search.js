import React from "react";

import "./news-search.css";

const NewsSearch = ({ value, setValue }) => {
  return (
    <input
      className="news__search"
      placeholder="Поиск..."
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default NewsSearch;
