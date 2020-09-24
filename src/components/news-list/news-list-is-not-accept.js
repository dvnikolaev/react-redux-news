import React from "react";
import { connect } from "react-redux";

import NewsListItem from "./news-list-item";

const NewsListIsNotAccept = ({ newsIsNotAccept, userId, isAdmin }) => {
  const newsList = newsIsNotAccept.map((news) => {
    if (news.author_id !== userId && !isAdmin) {
      return null;
    }
    return (
      <React.Fragment key={news.id}>
        <h2>Нерасмотренные новости</h2>
        <NewsListItem
          news={news}
        />
      </React.Fragment>
    );
  });

  return (
    <section>
      {newsList}
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    newsIsNotAccept: state.news.news.filter((item) => !item.isAccept),
    userId: state.auth.user.id,
    isAdmin: state.auth.user.isAdmin,
  };
};

export default connect(mapStateToProps)(NewsListIsNotAccept);
