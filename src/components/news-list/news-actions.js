import React from "react";
import { connect } from "react-redux";

const NewsActions = ({ isAdmin, isAccept, newsId }) => {
  if (!isAdmin || isAccept) {
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
};

const mapStateToProps = (state) => {
  return {
    isAdmin: state.auth.user.isAdmin,
  };
};

export default connect(mapStateToProps)(NewsActions);
