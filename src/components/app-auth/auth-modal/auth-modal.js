import React, { useState } from "react";
import { connect } from "react-redux";

import "./auth-modal.css";
import Modal from "../../Modal/Modal";
import { onLogin } from "../../../store/actions/auth";

const AuthModal = ({ setIsOpen, onLogin, errorAuth }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitForm = (e) => {
    e.preventDefault();

    if (username && password) {
      onLogin(username, password);
    }
  };
  const renderError = () => {
    if (!errorAuth) {
      return null;
    }

    return <span className="auth__error">{errorAuth}</span>;
  };

  return (
    <Modal setIsOpen={setIsOpen}>
      <h2 className="form__header">Вход в систему</h2>
      <form className="form-auth" onSubmit={onSubmitForm}>
        <label className="form-auth__label">
          <span className="form-auth__text">Имя пользователя:</span>
          <input
            name="username"
            type="text"
            className="form-auth__input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label className="form-auth__label">
          <span className="form-auth__text">Пароль:</span>
          <input
            className="form-auth__input"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        {renderError()}
        <button
          className="button form-auth__button form-auth__button-enter button--success"
          disabled={!username || !password}
        >
          Вход
        </button>
        <button
          className="button form-auth__button button--error"
          type="button"
          onClick={() => setIsOpen(false)}
        >
          Отмена
        </button>
      </form>
    </Modal>
  );
};

const mapStateToProps = (state) => {
  return {
    errorAuth: state.auth.errorAuth,
  };
};

export default connect(mapStateToProps, { onLogin })(AuthModal);
