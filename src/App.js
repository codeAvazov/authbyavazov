import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Cabinet } from "./components/Cabinet";
import { PrivateRoute } from "./utilits/PrivateRoute";
import { Navbar } from "./components/Navbar";
import { useDispatch } from "react-redux";
import { TestToken } from "./redux/actions/authActions";
import { useHistory } from "react-router";

export const App = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(TestToken(() => history.push("/")));
  }, [dispatch, history]);

  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <PrivateRoute exact path="/cabinet" component={Cabinet} />
        <Redirect from="*" to="/" />
      </Switch>
    </div>
  );
};
