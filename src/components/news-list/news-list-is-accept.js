import React from "react";
import { connect } from "react-redux";

import NewsListItem from "./news-list-item";

const NewsListIsAccept = ({ newsIsAccept, search }) => {
  const newsList = () => {
    if (!newsIsAccept.length) {
      return <h5>Список новостей пуст</h5>;
    }
    return newsIsAccept.map((news) => {
      return <NewsListItem key={news.id} news={news} />;
    });
  };

  return (
    <section>
      <h2>Новости</h2>
      {newsList()}
    </section>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    newsIsAccept: state.news.news.filter(
      (item) =>
        item.isAccept &&
        (item.title.toLowerCase().includes(ownProps.search) ||
          item.description.toLowerCase().includes(ownProps.search) ||
          item.date.includes(ownProps.search))
    ),
  };
};

export default connect(mapStateToProps)(NewsListIsAccept);
