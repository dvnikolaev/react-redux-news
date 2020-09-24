import React, { useState } from "react";
import { connect } from "react-redux";

import "../../form-parts/form-parts.css";
import Modal from "../../Modal/Modal";
import FormInput from "../../form-parts/form-input";
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

    return <span className="text__error">{errorAuth}</span>;
  };

  return (
    <Modal setIsOpen={setIsOpen}>
      <h2 className="form__header">Вход в систему</h2>
      <form className="form" onSubmit={onSubmitForm}>
        <FormInput
          label="имя пользователя"
          value={username}
          setValue={setUsername}
          type="text"
          name="username"
        />
        <FormInput 
          label="пароль"
          value={password}
          setValue={setPassword}
          type="password"
          name="password"
        />
        {renderError()}
        <button
          className="button form__button form__button-enter button--success"
          disabled={!username || !password}
        >
          Вход
        </button>
        <button
          className="button form__button button--error"
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
