import React from "react";

export const FormGroup = ({ id, val, onChangeData, name, type = "text" }) => {
  return (
    <div className="formGroup">
      <label htmlFor={id} style={{ textTransform: "capitalize" }}>
        {name}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={val}
        onChange={onChangeData}
        className="inputForm"
      />
    </div>
  );
};
