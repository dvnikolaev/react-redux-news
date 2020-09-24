import React from "react";
import { connect } from "react-redux";

const NewsListItem = ({ isAdmin, isAccept, title, description, date }) => {
  const renderNewsAction = () => {
    if (!isAdmin || isAccept) {
      return null;
    }
    return (
      <div className="news-actions">
        <button>Принять</button>
        <button>Отклонить</button>
      </div>
    );
  };
  return (
    <article className="news-list__item">
      <div className="news-content">
        <h3 className="news__title">{title}</h3>
        <p className="news__description">{description}</p>
        <span className="news__date">{date}</span>
      </div>
      {renderNewsAction()}
    </article>
  );
};

const mapStateToProps = (state) => {
  return {
    isAdmin: state.auth.user.isAdmin,
  };
};

export default connect(mapStateToProps)(NewsListItem);
