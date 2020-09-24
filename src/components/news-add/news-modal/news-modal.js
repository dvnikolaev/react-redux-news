import React, { useState } from "react";

import Modal from "../../Modal/Modal";
import FormInput from "../../form-parts/form-input";

const NewsModal = ({ setIsOpen }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <Modal setIsOpen={setIsOpen}>
      <h2 className="form__header">Добавление новости</h2>
      <span>{title}</span>
      <form className="form">
        <FormInput
          label="заголовок"
          value={title}
          setValue={setTitle}
          type="text"
          name="title"
        />
        <FormInput
          label="описание"
          value={description}
          setValue={setDescription}
          type="text"
          name="description"
        />
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
