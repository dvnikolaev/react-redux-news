import React from "react";

const FormInput = ({ label, value, setValue, type, name }) => {
  return (
    <label className="form__label">
      <span className="form__text">{label}:</span>
      <input
        name={name}
        type={type}
        className="form__input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </label>
  );
};

export default FormInput;
