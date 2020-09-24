import React, { useState } from "react";
import { connect } from "react-redux";
import { onLogout } from "../../store/actions/auth";

import "./app-auth.css";
import AuthModal from "./auth-modal/auth-modal";

const Auth = ({ isAuth, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);

  const logout = () => {
    setIsOpen(false);
    onLogout();
  }

  const renderAuthModal = () => {
    if (!isOpen || isAuth) {
      return null;
    }
    return <AuthModal setIsOpen={setIsOpen} />;
  };

  const renderButtonAuth = () => {
    if (isAuth) {
      return (
        <button className="button button--error" onClick={logout}>
          <i className="fas fa-sign-out-alt"></i>
          Выйти
        </button>
      );
    }
    return (
      <button
        className="button button--success"
        onClick={() => setIsOpen(true)}
      >
        <i className="fas fa-sign-in-alt"></i>
        <span className="icon__text">Войти</span>
      </button>
    );
  };

  return (
    <div className="auth">
      {renderButtonAuth()}
      {renderAuthModal()}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps, { onLogout })(Auth);
