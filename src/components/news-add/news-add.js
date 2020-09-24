import React, { useState } from 'react';
import { connect } from 'react-redux';

import './news-add.css';
import NewsModal from './news-modal/news-modal';

const NewsAdd = ({isAuth}) => {
  const [isOpen, setIsOpen] = useState(false);

  const renderModal = isOpen ? <NewsModal setIsOpen={setIsOpen} /> : null;

  if (!isAuth) {
    return null;
  }

  return <>
    <button className="button button--add-news" onClick={() => setIsOpen(true)}>Добавить запись</button>
    {renderModal}
  </>
}

const mapStateToProps = state => {
  return {
    isAuth: state.auth.isAuth
  }
}

export default connect(mapStateToProps)(NewsAdd);