import React, { useEffect } from "react";
import FileBase64 from "react-file-base64";
import "./FileUpload64.css";
import img from "../assets/add-boy-user.svg";

export const FileUpload64 = ({ toggle, show, changeFiles, files, uploadFile }) => {
  const click = () => {
    document.querySelector("input").click();
  };

  useEffect(() => {
    document.querySelector("input").setAttribute("accept", "image/*");
  });

  const close = () => {
    toggle();
    setTimeout(() => {
      changeFiles("");
    }, 500);
  };

  return (
    <div className={show ? "uploadWrapper uploadOpen" : "uploadWrapper"}>
      <div className="wrapperBlock">
        <div className="filebase64">
          <div className="blockImg">
            <img src={files.base64 || img} alt="#fileUpload" />
          </div>
          <div onClick={click} className="uploadBtn">
            <i className="ri-upload-2-fill" />
          </div>
          <FileBase64
            type="file"
            id="file"
            multiple={false}
            onDone={changeFiles}
            value={files}
          />
        </div>
        <div className="btnlar">
          <button type="button" onClick={close}>
            Close
          </button>
          <button type="button" onClick={uploadFile}>Edit</button>
        </div>
      </div>
    </div>
  );
};
