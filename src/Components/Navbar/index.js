import { Link } from "react-router-dom";
import "./styles.css";

export default () => {
  return (
    <div className="header navbar">
      <div className="logo">
        <Link to="/">Talent Adore</Link>
      </div>
      <div className="auth-links">
        <Link to="/login">Login</Link>
        <a href="#">Signup</a>
      </div>
    </div>
  );
};