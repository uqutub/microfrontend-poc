import Login from './Pages/Login';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

const LoginComponentWithDefaultProps = () => (<Login
  onLogin={(p) => console.log('Login CB Func ', p)}
  isLoggedin={false}
  history={{}}
/>);

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LoginComponentWithDefaultProps} />
      </Switch>
    </Router>
  );
}

export default App;
