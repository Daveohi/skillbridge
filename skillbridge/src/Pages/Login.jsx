import { Link } from "react-router-dom";
import "../Styles/Login.css";
import Sidebar from "../Component/Sidebar";
import LoginForm from "../Component/LoginForm";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  return (
    <div className="desktop2">
      <Sidebar />

      <div className="frame-2">
        <div className="create-acc">
          <div className="div-wrapper">
            <div className="text-wrapper-3">Login</div>
          </div>
          <div className="lets-get-started">
            <div className="text-wrapper-4">Continue with Conclase Survey</div>
          </div>
          <br />
          <LoginForm value={email} hook={setEmail} />
          <br />
          <div className="already-have-account?">
            <div className="div-wrapper-2">
              <div className="text-wrapper-7">New to conclase survey?</div>
            </div>
            <Link className="div-wrapper-2" to="/register">
              <button className="text-wrapper-8">Register</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
