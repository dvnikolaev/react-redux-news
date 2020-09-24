import React, { useState } from 'react';

import NewsModal from './news-modal/news-modal';

const NewsAdd = () => {
  const [isOpen, setIsOpen] = useState(false);

  const renderModal = isOpen ? <NewsModal setIsOpen={setIsOpen} /> : null;

  return <>
    <button onClick={() => setIsOpen(true)}>Добавить запись</button>
    {renderModal}
  </>
}

export default NewsAdd;