import React from "react";
import { connect } from "react-redux";

import "./app-auth.css";

const Auth = ({ isAuth }) => {
  const renderButtonAuth = () => {
    if (isAuth) {
      return <button className="button button--error">Выйти</button>;
    } else {
      return <button className="button button--success">Войти</button>
    }
  };

  return <div className="auth">{renderButtonAuth()}</div>;
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps)(Auth);
