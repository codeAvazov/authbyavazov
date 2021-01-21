import { Route, Redirect } from "react-router-dom";
import { TOKEN } from "./constants";

export const PrivateRoute = ({ component, path, rest }) => {
  const token = localStorage.getItem(TOKEN);

  if (token) {
    return <Route path={path} component={component} {...rest} />;
  }

  return <Redirect from="*" to="/" />;
};
