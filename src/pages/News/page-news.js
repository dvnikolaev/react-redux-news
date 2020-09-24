import React from 'react';

import NewsList from '../../components/news-list/news-list';
import NewsAdd from '../../components/news-add/news-add';

const PageNews = () => {
  return <div>
    <NewsAdd />
    <NewsList />
  </div>
}

export default PageNews;