import "../Styles/Register.css";
import Sidebar from "../Component/Sidebar";
import { useState } from "react";
import RegisterForm from "../Component/RegisterForm.jsx";

const Register = () => {
  const [firstName, setFirstName] = useState("");

  return (
    <div className="desktop1">
      <Sidebar />
      <div className="frame-2">
        <div className="create-acc">
          <div className="div-wrapper">
            <div className="text-wrapper-3">Register</div>
          </div>
          <div className="lets-get-started">
            <p className="let-s-get-you">
              Let&#39;s get you started with Conclase Survey
            </p>
          </div>
        </div>
        <RegisterForm first={firstName} last={setFirstName} />
      </div>
    </div>
  );
};

export default Register;
