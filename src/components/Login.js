import React, { useState } from "react";
import { validUser } from "../middleware/validUser";
import { useDispatch } from "react-redux";
import { LoginReq } from "../redux/actions/authActions";
import { toast } from "react-toastify";
import { useHistory } from "react-router";
import { FormComponent } from "./FormComponent";
import { LOGIN } from "../utilits/constants";

export const Login = () => {
  const [newUser, setNewUser] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const history = useHistory();

  const f = () => {
    toast.success("Success enter !!!");
    history.push("/cabinet");
  };

  const loginUser = (e) => {
    e.preventDefault();

    const match = validUser(newUser);

    if (match) {
      dispatch(LoginReq(newUser, f));
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
    <div className="register i-c">
      <FormComponent
        submit={loginUser}
        user={newUser}
        changeData={change}
        type={LOGIN}
        title={"Login"}
      />
    </div>
  );
};
