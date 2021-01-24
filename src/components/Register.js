import React, { useState } from "react";
import { toast } from "react-toastify";
import { validateNewUser } from "../middleware/validateNewUser";
import { useDispatch } from "react-redux";
import { RegisterReq } from "../redux/actions/authActions";
import { useHistory } from "react-router";
import { FormComponent } from "./FormComponent";
import { REGISTER } from "../utilits/constants";

const obj = {
  email: "",
  name: "",
  password: "",
  confirmPassword: "",
};

export const Register = () => {
  const [newUser, setNewUser] = useState({
    ...obj,
  });

  const dispatch = useDispatch();
  const history = useHistory();

  const succes = () => {
    setNewUser({
      ...obj,
    });
    toast.success("User created !!!");
    history.push("/login");
  };

  const registerUser = (e) => {
    e.preventDefault();

    const match = validateNewUser(newUser);

    if (match) {
      dispatch(RegisterReq(newUser, succes));
    } else {
      toast.warning("Please try again !!!");
      return;
    }
  };

  const change = (e) => {
    const { name, value } = e.target;
    setNewUser({
      ...newUser,
      [name]: value,
    });
  };

  return (
    <div className="register i-c ">
      <FormComponent
        submit={registerUser}
        user={newUser}
        changeData={change}
        title={"Register"}
        type={REGISTER}
      />
    </div>
  );
};
