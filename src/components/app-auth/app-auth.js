import React, { useState } from "react";
import { connect } from "react-redux";

import "./app-auth.css";
import AuthModal from "./auth-modal/auth-modal";

const Auth = ({ isAuth }) => {
  const [isOpen, setIsOpen] = useState(false);

  const renderAuthModal = () => {
    if (!isOpen) {
      return null;
    }
    return <AuthModal setIsOpen={setIsOpen} />;
  };

  const renderButtonAuth = () => {
    if (isAuth) {
      return <button className="button button--error">Выйти</button>;
    }
    return (
      <button
        className="button button--success"
        onClick={() => setIsOpen(true)}
      >
        Войти
      </button>
    );
  };

  return (
    <div className="auth">
      {renderButtonAuth()}
      {`${isOpen}`}
      {renderAuthModal()}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps)(Auth);
