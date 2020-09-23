import React, { useState } from "react";
import { connect } from "react-redux";

import "./auth-modal.css";
import Modal from "../../Modal/Modal";
import { onLogin } from "../../../store/actions/auth";

const AuthModal = ({ setIsOpen, onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitForm = (e) => {
    e.preventDefault();

    if (username && password) {
      onLogin(username, password);
    }
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
        <button className="button form-auth__button button--success">
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

export default connect(null, { onLogin })(AuthModal);
