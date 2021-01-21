import React from "react";
import { useHistory, useLocation } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { LogOut } from "../redux/actions/authActions";

export const AuthOptions = () => {
  const history = useHistory();
  const location = useLocation();
  const { token } = useSelector((s) => s.auth);
  const dispatch = useDispatch();

  const login = () => history.push("/login");
  const register = () => history.push("/register");
  const cabinet = () => history.push("/cabinet");
  const f = () => history.push("/");

  const logout = () => {
    dispatch(LogOut(f));
  };

  if (token) {
    return (
      <div className="auth-options">
        {!location.pathname.includes("cabinet") ? (
          <button type="button" className="btn btn-danger" onClick={cabinet}>
            Cabinet
          </button>
        ) : (
          <div />
        )}
        <button type="button" className="btn btn-info" onClick={logout}>
          Log Out
        </button>
      </div>
    );
  }

  return (
    <div className="auth-options">
      <button type="button" className="btn btn-danger" onClick={register}>
        Register
      </button>
      <button type="button" className="btn btn-danger" onClick={login}>
        Login
      </button>
    </div>
  );
};
