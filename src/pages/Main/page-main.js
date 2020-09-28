import React from "react";
import { connect } from "react-redux";

import "./page-main.css";

const Main = ({ username }) => {
  const name = username ? username : "гость";

  const renderInfo = () => {
    if (username) {
      return null;
    }

    return (
      <>
        <p>Для входа в систему используйте пары логин - пароль:</p>
        <p>user - user</p>
        <p>admin - admin</p>
        <hr></hr>
        <p><strong>Гость</strong> может только просматривать одобренные новости.</p>
        <p><strong>Пользователь</strong> может добавлять новости. Видит только одобренные и свои неодобренные новости.</p>
        <p><strong>Администратор</strong> может одобрить / отклонить новость. Видит все новости.</p>
        <p>По умолчанию созданная новость не является одобренной.</p>
      </>
    );
  };

  return (
    <main className="page__main">
      <h3>
        Привет, <span className="name">{name}!</span>
      </h3>
      {renderInfo()}
    </main>
  );
};

const mapStateToProps = (state) => {
  return {
    username: state.auth.user.username,
  };
};

export default connect(mapStateToProps)(Main);
