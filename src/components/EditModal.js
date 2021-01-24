import React from "react";
import "./EditModal.css";
import { FormComponent } from "../components/FormComponent";
import { DATA, PASSWORD } from "../utilits/constants";

export const EditModal = ({
  submit,
  user,
  changeData,
  show,
  toggleEditAlert,
  closeBtn,
  choose,
  setCurrentChoose,
}) => {
  return (
    <div
      className={show ? "register editUser" : "register editUser openEditUser"}
    >
      {!choose && (
        <div className="btnGroup">
          <button
            type="button"
            className="editModalBtn"
            onClick={() => setCurrentChoose(1)}
          >
            Data
          </button>
          <button
            type="button"
            className="editModalBtn"
            onClick={() => setCurrentChoose(2)}
          >
            Password
          </button>
          <div className="smile"></div>
        </div>
      )}
      {choose === 1 ? (
        <FormComponent
          submit={submit}
          user={user}
          changeData={changeData}
          title="Edit"
          toggleEditAlert={toggleEditAlert}
          closeBtn={closeBtn}
          type={DATA}
        />
      ) : choose === 2 ? (
        <FormComponent
          submit={submit}
          user={user}
          changeData={changeData}
          title="Edit"
          toggleEditAlert={toggleEditAlert}
          closeBtn={closeBtn}
          type={PASSWORD}
        />
      ) : null}
    </div>
  );
};
