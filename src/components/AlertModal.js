import React from "react";
import "./AlertModal.css";

export const AlertModal = ({
  message = "Some text about this alert !!!",
  alertFunc,
  show,
}) => {
  return (
    <div className={show ? "alertModal Open" : "alertModal"}>
      <div className="alertBlock">
        <div className="alertMessage">{message}</div>
        <div className="alertBtns">
          <button
            type="button"
            className="alertBtn"
            onClick={() => alertFunc(true)}
          >
            Yes
          </button>
          <button
            type="button"
            className="alertBtn ml"
            onClick={() => alertFunc(false)}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};
