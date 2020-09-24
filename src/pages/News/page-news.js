import React, { useState } from "react";

import NewsList from "../../components/news-list/news-list";
import NewsAdd from "../../components/news-add/news-add";
import NewsSearch from "../../components/news-search/news-search";

const PageNews = () => {
  const [search, setSearch] = useState("");

  return (
    <main className="page__main">
      <NewsSearch value={search} setValue={setSearch} />
      <NewsAdd />
      <NewsList search={search.toLowerCase().trim()} />
    </main>
  );
};

export default PageNews;
