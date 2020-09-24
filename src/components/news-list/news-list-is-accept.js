import React from 'react';
import { connect } from 'react-redux';

import NewsListItem from './news-list-item';

const NewsListIsAccept = ({ newsIsAccept, }) => {
  const newsList = () => {
    if (!newsIsAccept.length) {
      return <h5>Список новостей пуст</h5>
    }
    return newsIsAccept.map((news) => {
      return (
        <NewsListItem
          key={news.id}
          title={news.title}
          description={news.description}
          date={news.date}
          isAccept={news.isAccept}
        />
      );
    });
  }
  
  return (
    <section>
      <h2>Новости</h2>
      {newsList()}
    </section>
  );
}

const mapStateToProps = state => {
  return {
    newsIsAccept: state.news.news.filter((item) => item.isAccept)
  }
}

export default connect(mapStateToProps)(NewsListIsAccept);