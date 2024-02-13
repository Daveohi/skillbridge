// import React from 'react';
import Logo from "../assets/Image/Skillbridge_logo.png";

const Sidebar = () => {
  return (
    <div className="div">
      <div className="rectangle" />
      <div className="rectangle-2" />
      <div className="oval" />
      <div className="overlap-group">
        <div className="oval-2" />
        {/* <div className="rectangle-3" /> */}
        <div className="CONCLASE-LOGO">
          <img className="image" alt="Image" src={Logo} />
        </div>
        <div className="frame">
          <p className="conclase-survey">
            <span className="text-wrapper">&nbsp;</span>
            <span className="span">Skill</span>
            <span className="text-wrapper-2">&nbsp;</span>
            <span className="span">Bridge</span>
          </p>
        </div>
        <div className="oval-3" />
        <div className="oval-4" />
      </div>
    </div>
  );
};

export default Sidebar;
