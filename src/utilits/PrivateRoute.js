import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

export const PrivateRoute = ({ component, path, rest }) => {
  const { token } = useSelector((s) => s.auth);

  if (token) {
    return <Route path={path} component={component} {...rest} />;
  }

  return <Redirect from="*" to="/" />;
};
