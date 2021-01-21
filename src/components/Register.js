import React, { useState } from "react";
import { toast } from "react-toastify";
import { validateNewUser } from "../middleware/validateNewUser";
import { useDispatch } from "react-redux";
import { RegisterReq } from "../redux/actions/authActions";
import { useHistory } from "react-router";

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
      <form onSubmit={registerUser} className="form mt-2">
        <div>
          <h1 className="t-c">Register User</h1>
        </div>
        <div className="formGroup">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            value={newUser.email}
            onChange={change}
            className="inputForm"
          />
        </div>
        <div className="formGroup">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={newUser.name}
            onChange={change}
            className="inputForm"
          />
        </div>
        <div className="formGroup">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={newUser.password}
            onChange={change}
            className="inputForm"
          />
        </div>
        <div className="formGroup">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={newUser.confirmPassword}
            onChange={change}
            className="inputForm"
          />
        </div>
        <div className="btn">
          <button type="submit">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};
