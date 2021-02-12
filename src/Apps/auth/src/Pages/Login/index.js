import { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";

const Login = ({ onLogin, isLoggedin, history }) => {
  const [creadentials, setCreadentials] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    isLoggedin && history.push("/dashboard");
  }, [isLoggedin]);

  const onSubmit = (e) => {
    e.preventDefault();
    onLogin(creadentials);
  };
  const onChangeText = (e) =>
    setCreadentials({ ...creadentials, [e.target.name]: e.target.value });

  return (
    <div className="login-box">
      <label>Username</label>
      <input
        type="text"
        name="username"
        onChange={onChangeText}
        placeholder="Username"
      />
      <br />
      <label>Password</label>
      <input
        type="password"
        name="password"
        onChange={onChangeText}
        placeholder="Password"
      />
      <br />
      <br />
      <button onClick={onSubmit}>Login</button>
    </div>
  );
};

export default withRouter(Login);
