import React from "react";

import NewsActions from "./news-actions";

const NewsListItem = ({ news }) => {
  return (
    <article className="news-list__item">
      <div className="news-content">
        <h3 className="news__title">{news.title}</h3>
        <p className="news__description">{news.description}</p>
        <span className="news__date">{news.date}</span>
      </div>
      {<NewsActions isAccept={news.isAccept} newsId={news.id} />}
    </article>
  );
};

export default NewsListItem;
