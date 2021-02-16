import { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import Datatables from "@bit/mikaels.talentadore.datatables";

import './login.css';

const Login = ({ onLogin, isLoggedin, history }) => {
  const [creadentials, setCreadentials] = useState({
    username: "",
    password: "",
  });

  const [dt, setDt] = useState([{ first: 'innpt first from login', last: 'laaaassssst', email: 'emememememail login' }]);

  useEffect(() => {
    isLoggedin && history.push("/dashboard");
  }, [isLoggedin]);

  const onSubmit = (e) => {
    e.preventDefault();
    onLogin(creadentials);
  };

  const onChangeText = (e) =>
    setCreadentials({ ...creadentials, [e.target.name]: e.target.value });

  const changeDatatable = () =>
    setDt([{ first: 'innpt first from login', last: 'laaaassssst', email: 'emememememail login' },
    { first: 'innpt first from login', last: 'laaaassssst', email: 'emememememail login' },
    { first: 'innpt first from login', last: 'laaaassssst', email: 'emememememail login' },
    { first: 'innpt first from login', last: 'laaaassssst', email: 'emememememail login' },
    { first: 'innpt first from login', last: 'laaaassssst', email: 'emememememail login' }]);

  return (
    <div className="login-box">
      <h1>Login Application on React</h1>
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

      <hr />

      <Datatables datatable={dt} />
      <button onClick={changeDatatable}>Change data via props</button>

      <hr />

      <h1>Using Bootstrap Form</h1>
      <div class="input-group input-group-lg">
        <span class="input-group-addon" id="sizing-addon1">@</span>
        <input type="text" class="form-control" placeholder="Username" aria-describedby="sizing-addon1" />
      </div>

      <div class="input-group">
        <span class="input-group-addon" id="sizing-addon2">@</span>
        <input type="text" class="form-control" placeholder="Username" aria-describedby="sizing-addon2" />
      </div>

      <div class="input-group input-group-sm">
        <span class="input-group-addon" id="sizing-addon3">@</span>
        <input type="text" class="form-control" placeholder="Username" aria-describedby="sizing-addon3" />
      </div>

    </div>
  );
};

export default withRouter(Login);
