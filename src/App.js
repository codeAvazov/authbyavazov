import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Cabinet } from "./components/Cabinet";
import { PrivateRoute } from "./utilits/PrivateRoute";
import { Navbar } from "./components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { TestToken } from "./redux/actions/authActions";
import { useHistory } from "react-router";
import { Loader } from "./components/Loader";
import { NotFoundPage } from "./components/NotFoundPage";

export const App = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const loader = useSelector((s) => s.load);
  const { token } = useSelector((s) => s.auth);

  useEffect(() => {
    if (token) dispatch(TestToken());
  }, [dispatch, history, token]);

  return (
    <div>
      {loader ? (
        <Loader />
      ) : (
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <PrivateRoute exact path="/cabinet" component={Cabinet} />
            <Route exact path="/notFound" component={NotFoundPage} />
            <Redirect from="*" to="/notFound" />
          </Switch>
        </div>
      )}
    </div>
  );
};
