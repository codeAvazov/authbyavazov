import React, { useState } from "react";
import { validUser } from "../middleware/validUser";
import { useDispatch } from "react-redux";
import { LoginReq } from "../redux/actions/authActions";
import { toast } from "react-toastify";
import { useHistory } from "react-router";

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

  const registerUser = (e) => {
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
      <form onSubmit={registerUser} className="form">
        <div>
          <h1 className="t-c">Login User</h1>
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
        <div className="btn">
          <button type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};
