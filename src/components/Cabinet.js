import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser, UploadFile } from "../redux/actions/userActions";
import { EditDataUser, EditPasswordUser } from "../redux/actions/userActions";
import { AlertModal } from "./AlertModal";
import { EditModal } from "./EditModal";
import { validateEditDataUser } from "../middleware/validateEditDataUser";
import img from "../assets/add-boy-user.svg";
import { FileUpload64 } from "./FileUpload64";
import { toast } from "react-toastify";

export const Cabinet = () => {
  const user = useSelector((s) => s.auth.user);
  const dispatch = useDispatch();

  const [showAlert, setShowAlert] = useState(false);
  const [showEdit, setShowEdit] = useState(true);
  const [showUploadMOdal, setShowUploadMOdal] = useState(false);
  const [choose, setChoose] = useState(null);
  const [file, setFile] = useState("");
  const [editUser, setEditUser] = useState({
    email: "",
    name: "",
    oldPassword: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    setEditUser((prev) => ({
      ...prev,
      ...user,
    }));
  }, [user]);

  const setCurrentChoose = (v) => {
    setChoose(v);
  };

  const toggleAlert = () => {
    setShowAlert((prev) => !prev);
  };

  const toggleEditAlert = () => {
    setShowEdit((prev) => !prev);
  };

  const ClearAll = () => {
    toggleEditAlert();
    setEditUser((prev) => ({
      oldPassword: "",
      password: "",
      confirmPassword: "",
      ...user,
    }));
    setTimeout(() => {
      setChoose(null);
    }, 500);
  };

  const userDeletes = (ok) => {
    if (ok) dispatch(deleteUser(user.id));
    toggleAlert();
  };

  const changeDataUser = (e) => {
    const { name, value } = e.target;
    setEditUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const editDataUser = (e) => {
    e.preventDefault();
    const { email, name, password, confirmPassword, oldPassword } = editUser;

    const obj =
      choose === 1
        ? { email, name }
        : { password, confirmPassword, oldPassword };

    const test = validateEditDataUser(obj, choose);

    if (test) {
      dispatch(
        choose === 1
          ? EditDataUser(user.id, obj)
          : EditPasswordUser(user.id, obj)
      );
    }
  };

  const toggleUploadModal = () => {
    setShowUploadMOdal((prev) => !prev);
  };

  const changeFiles = (files) => {
    if (files.file.size > 1024820) {
      toast.warning("File size must be less than 1mb");
      return;
    }
    setFile(files);
  };

  const uploadFile = () => {
    dispatch(UploadFile(user.id, { file: file.base64 }));
  };

  return (
    <div className="cabinet">
      {user && (
        <div className="userCard">
          <div className="userImg">
            <img src={user.file || img} alt="#123" />
            <div className="editImage" onClick={toggleUploadModal}>
              <i className="ri-image-edit-line" />
            </div>
          </div>
          <div className="userData">
            <div>
              <div className="name">{user.name}</div>
              <div className="email">{user.email}</div>
            </div>
            <div className="_id">
              <b>Id</b> - {user.id}
            </div>
          </div>
          <div className="userDetils">
            <div onClick={toggleEditAlert}>
              <i className="ri-pencil-fill" />
            </div>
            <div onClick={toggleAlert}>
              <i className="ri-delete-bin-7-fill" />
            </div>
          </div>
        </div>
      )}

      <EditModal
        submit={editDataUser}
        user={editUser}
        changeData={changeDataUser}
        show={showEdit}
        toggleEditAlert={ClearAll}
        closeBtn={true}
        choose={choose}
        setCurrentChoose={setCurrentChoose}
      />

      <AlertModal
        show={showAlert}
        message={"Are you really delete your profile ?"}
        alertFunc={userDeletes}
      />

      <FileUpload64
        show={showUploadMOdal}
        toggle={toggleUploadModal}
        changeFiles={changeFiles}
        files={file}
        uploadFile={uploadFile}
      />
    </div>
  );
};
