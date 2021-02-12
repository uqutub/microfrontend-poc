import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Login from "@bit/mikaels.talentadore.login";
import Home from "@bit/mikaels.talentadore.home";
import Dashboard from "@bit/mikaels.talentadore.dashboard";
import Navbar from "../Components/Navbar";
import { LOGIN, DASHBOARD } from "../Constants/RoutingNames";
import { auth_user } from "../Redux/Actions/Creators";

export default () => {
  const dispatch = useDispatch();
  const { isLoggedin } = useSelector(({ authReducer }) => authReducer);
  const onLogin = (DTO) => dispatch(auth_user(DTO));
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route
          path={`${LOGIN}`}
          exact
          component={() => <Login onLogin={onLogin} isLoggedin={isLoggedin} />}
        />
        <PrivateRoute exact component={protectedRoutes} />
      </Switch>
    </Router>
  );
};

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isLoggedin } = useSelector(({ authReducer }) => authReducer);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!isLoggedin) {
          return <Redirect to={{pathname: '/'}} />;
        } else {
          return <Component {...props} />;
        }
      }}
    />
  );
};

const protectedRoutes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path={`${DASHBOARD}`} component={Dashboard} />
      <Redirect to="/" />
    </Switch>
  );
};
