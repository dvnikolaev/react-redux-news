import React from "react";
import { connect } from "react-redux";
import { onAcceptNews } from "../../store/actions/news";

const NewsActions = ({ isAdmin, isAccept, newsId, onAcceptNews }) => {
  if (!isAdmin || isAccept) {
    return null;
  }
  return (
    <div className="news-actions">
      <button
        className="button news-actions__button button--success"
        onClick={() => onAcceptNews(newsId)}
      >
        Принять
      </button>
      <button className="button news-actions__button button--error">
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

export default connect(mapStateToProps, { onAcceptNews })(NewsActions);
