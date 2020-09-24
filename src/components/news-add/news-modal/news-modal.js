import React, { useState } from "react";

import Modal from "../../Modal/Modal";

const NewsModal = ({ setIsOpen }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <Modal setIsOpen={setIsOpen}>
      <h2 className="form__header">Добавление новости</h2>
      <form className="form">
        <label className="form__label">
          <span className="form__text">Заголовок:</span>
          <input
            name="title"
            type="text"
            className="form__input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label className="form__label">
          <span className="form__text">Описание:</span>
          <input
            className="form__input"
            name="description"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <button className="button form__button form__button-enter button--success">
          Добавить
        </button>
        <button className="button form__button button--error" type="button">
          Отмена
        </button>
      </form>
    </Modal>
  );
};

export default NewsModal;
