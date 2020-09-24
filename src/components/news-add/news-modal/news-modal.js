import React, { useState } from "react";

import Modal from "../../Modal/Modal";
import FormInput from "../../form-parts/form-input";
import { addNews } from "../../../store/actions/news";
import { connect } from "react-redux";

const NewsModal = ({ setIsOpen, addNews }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const onSubmitForm = (e) => {
    e.preventDefault();

    if (title && description) {
      addNews(title, description);
      setIsOpen(false);
    }
  };

  return (
    <Modal setIsOpen={setIsOpen}>
      <h2 className="form__header">Добавление новости</h2>
      <form className="form" onSubmit={onSubmitForm}>
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
        <button className="button form__button button--error" type="button" onClick={() => setIsOpen(false)}>
          Отмена
        </button>
      </form>
    </Modal>
  );
};

export default connect(null, { addNews })(NewsModal);
