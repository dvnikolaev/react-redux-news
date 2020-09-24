import React from "react";
import { connect } from "react-redux";

import NewsListItem from "./news-list-item";

const NewsListIsNotAccept = ({
  newsIsNotAccept,
  userId,
  isAdmin,
  isOwnNews,
  search,
}) => {
  const newsList = newsIsNotAccept.map((news) => {
    if (news.author_id !== userId && !isAdmin) {
      return null;
    }
    return <NewsListItem key={news.id} news={news} />;
  });

  const renderHeader =
    isOwnNews || (isAdmin && newsIsNotAccept.length) ? (
      <h2>Нерасмотренные новости</h2>
    ) : null;

  return (
    <section>
      {renderHeader}
      {newsList}
    </section>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    newsIsNotAccept: state.news.news.filter(
      (item) =>
        !item.isAccept &&
        (item.title.toLowerCase().includes(ownProps.search) ||
          item.description.toLowerCase().includes(ownProps.search) ||
          item.date.includes(ownProps.search))
    ),
    isOwnNews: state.news.news.some(
      (item) => item.author_id === state.auth.user.id && !item.isAccept
    ),
    userId: state.auth.user.id,
    isAdmin: state.auth.user.isAdmin,
  };
};

export default connect(mapStateToProps)(NewsListIsNotAccept);
