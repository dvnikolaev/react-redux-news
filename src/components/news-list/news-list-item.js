import React from "react";

import NewsActions from "./news-actions";

const NewsListItem = ({ news }) => {
  /*const renderNewsAction = () => {
    if (!isAdmin || news.isAccept) {
      return null;
    }
    return (
      <div className="news-actions">
        <button 
          className="button news-actions__button button--success">
          Принять
        </button>
        <button 
          className="button news-actions__button button--error">
          Отклонить
        </button>
      </div>
    );
  };*/
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

const mapStateToProps = (state) => {
  return {
    isAdmin: state.auth.user.isAdmin,
  };
};

export default NewsListItem;
