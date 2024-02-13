// import react from 'react';
// import Logo from "../assets/Image/Coclase logo.png";
import Icon from "../assets/Image/_Facebook.svg";
import Twitter from "../assets/Image/_Twitter.png";
import Insta from "../assets/Image/_Instagram.png";
import Linkd from "../assets/Image/_Linkedin.png";
import Young from "../assets/Image/bg image.png";
import One from "../assets/Image/preview 4.png";
import Two from "../assets/Image/preview 1.png";
import Three from "../assets/Image/preview 2.png";
import Four from "../assets/Image/preview 3.png";
import "../Styles/Homepage.css";
import { Link } from "react-router-dom";
import Logo from "../assets/Image/Skillbridge_logo.png"

const Homepage = () => {
  return (
    // <div className="home-container">
    //     <div className="logo-box">
    //         <img src={Logo} alt=""
    //         className="logo" />
    //     </div>
    // </div>

    <div className="desktop">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="overlap-group">
            <div className="Skillbridge-LOGO">
              {/* <img className="image" alt="Ellipse" src="../assets/Image/Ellipse 7.png" /> */}
              <div className="ellipse"></div>
              <img className="image" alt="Image" src={Logo} />
            </div>
            <div className="oval" />
            <div className="div">
              <div className="oval-2" />
              <div className="welcome-to-skillbridge">
                <div className="text-block">
                  <p className="p">
                    <span className="text-wrapper">Welcome to </span>
                    <span className="span">SkillBridge Hub </span>
                    {/* <span className="text-wrapper-2">Survey!</span> */}
                  </p>
                  <p className="text-wrapper-3">
                    Discover a unique platform designesd to equip students with skills for today`s job market, connecting them with mentors and opening the doors to top-tier internships.
                  </p>
                </div>
                <div className="frame">
                  <div className="ellipse-2" />
                  <div className="ellipse-2" />
                  <div className="ellipse-2" />
                  <div className="ellipse-2" />
                  {/* Facbook Link*/}
                  <a href="facebook.com" target="_blank">
                    <img className="facebook" alt="Facebook" src={Icon} /></a>
                  
                  {/* Twitter Link */}
                  <a href="twitter.com" target="_blank">
                  <img className="twitter" alt="Twitter" src={Twitter} /></a>

                  {/* Instagram Link */}
                  <a href="instagram.com" target="_blank">
                    <img className="instagram" alt="Instagram" src={Insta} /></a>
                  
                  {/* Linkedin Link */}
                  <a href="linkedin.com" target="_blank">
                  <img className="linkedin" alt="Linkedin" src={Linkd} 
                   /></a>
                </div>
              </div>
              <div className="PEOPLE">
                <div className="overlap-group-2">

                  
                  <img
                    className="element-removebg-preview"
                    alt="Element removebg preview"
                    src= { One }
                  />


                  <img className="img" alt="Element removebg preview" src={Two} />
                  

                  <img
                    className="element-removebg-preview-2"
                    alt="Element removebg preview"
                    src= { Three}
                  />

                  {/*  */}
                  <img
                    className="element-removebg-preview-3"
                    alt="Element removebg preview"
                    src= { Four}
                  />

                  {/* Main Background picture */}
                  <img
                    className="medium-shot-young"
                    alt="Medium shot young"
                    src={ Young}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="LOGIN-REGISTER">
            <Link className="LOGIN" to="/login">
              <button className="text-wrapper-4">Login</button>
            </Link>
            <Link className="REGISTER" to="/register">
              <button className="text-wrapper-5">Register</button>
            </Link>
          </div>
          <div className="rectangle" />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
