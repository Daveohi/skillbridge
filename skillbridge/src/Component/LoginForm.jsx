
import { Link } from "react-router-dom";
import { useState } from "react";
import "../Styles/Login.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginForm = ({value, hook}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    // Your authentication logic goes here
    // For simplicity, let's assume the correct credentials are hardcoded
    const correctEmail = "user@conclase.com";
    const correctPassword = "password";

    if (email === correctEmail && password === correctPassword) {
      // Successful login - navigate to the dashboard
      window.location.href = "/dashboardd"; // Change this based on your routing mechanism
    } else {
      // Incorrect credentials - display error message
      setErrorMessage("The email or password you typed is incorrect");
    }
  };

  return (
    <div>
      <div className="emaiil">
        <input
          className="email"
          placeholder="Email"
          type="email"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <br />
      <div className="frame-3">
        <div className="confirm-password">
          <input
            className="confirm-password-2"
            placeholder="Enter password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={handlePasswordChange}
          />
          <button
            className="toggle"
            type="button"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </button>
        </div>
      </div>
      {errorMessage && (
        <div className="div-wrapper-2">
          <p className="p">{errorMessage}</p>
        </div>
      )}
      <div className="terms-and-conditions">
        <Link className="div-wrapper-2" to="/Reset">
          <div className="text-wrapper-6">Forgot password?</div>
        </Link>
        <br />
      </div>
      <div className="create-my-account">
        <div className="creat-my-account" to="/dashboardd">
          <button className="creat-my-account-2" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
