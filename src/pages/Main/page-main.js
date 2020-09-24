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
      </>
    );
  };

  return (
    <div>
      <h3>
        Привет, <span className="name">{name}!</span>
      </h3>
      {renderInfo()}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    username: state.auth.user.username,
  };
};

export default connect(mapStateToProps)(Main);
