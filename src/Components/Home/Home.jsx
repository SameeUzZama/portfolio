import React from "react";
import "./Home.css";
import Github from "../../Asset/github.png";
import Linkedin from "../../Asset/linkedin.png";
import Code from "../../Asset/code.png";
import Glasses1 from "../../Asset/glassesimoji.png";
import Resume from "../../Asset/SAMEE UZ ZAMA.pdf";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { Link } from "react-scroll";

export const Home = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="home" id="Home">
      <div className="h_left">
        <div className="h_name">
          <span style={{ color: darkMode ? "white" : "" }}>Hey! I Am</span>
          <span>Samee Uz Zama</span>
          <span style={{ color: darkMode ? "white" : "" }}>
            React JS developer who is for designing and implementing UI
            components for JavaScript-based web applications with the use of
            open- source library infrastructure. Strong knowledge of basic web
            technologies such as HTML, CSS, Bootstrap, and others...
          </span>
        </div>
        <div className="buttons">
          <span>
            <Link to="Footer" spy={true} smooth={true}>
              <button className="button a_button">Hire Me</button>
            </Link>
            <div className={darkMode ? "ablur" : "ablur1"}></div>
          </span>
          <span>
            <a href={Resume} download>
              <button className="button a_button">Download CV</button>
            </a>
            <div className={darkMode ? "ablur" : "ablur1"}></div>
          </span>
        </div>
        <div className="h_icons">
          <a
            href="https://github.com/SameeUzZama"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Github} alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/samee-uzzama-90764a256"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Linkedin} alt="" />
          </a>
        </div>
      </div>
      <div className="h_right">
        <div className="h_icon">
          <img src={Glasses1} alt="" />
        </div>
        <img src={Code} alt="" />
      </div>
      <div className={darkMode ? "blur1" : "blur"}></div>
    </div>
  );
};
export default Home;
