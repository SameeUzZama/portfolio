import React from "react";
import "./Home.css";
import Github from "../../Asset/github.png";
import Linkedin from "../../Asset/linkedin.png";
import Code from "../../Asset/code.png";
import Glasses1 from "../../Asset/glassesimoji.png";
import Crown from "../../Asset/crown.png";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { Link } from "react-scroll";

export default function Home() {
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
            open- source library infrastructure. My passion became my
            profession, I'm a driven, energetic and proactive tech
            professionally.
          </span>
        </div>
        <span>
          <Link to="Contact" spy={true} smooth={true}>
            <button className="button h_button">Hire Me</button>
          </Link>
        </span>
        <div className="h_icons">
          <a
            href="https://github.com/SameeUzZama"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Github} alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/samee-uz-zama/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Linkedin} alt="" />
          </a>
        </div>
      </div>
      <div className="h_right">
        <img src={Code} alt="" />
        <div className="h_icon">
          <img src={Glasses1} alt="" />
        </div>
        <div className="h_fDiv">
          <img src={Crown} alt="" />
          <span>Web Developer</span>
        </div>
      </div>
      <div
        className={darkMode ? "blur1" : "blur"}
        style={{
          background: "rgb(10,255,255)",
          top: "25rem",
          width: "35rem",
          height: "31rem",
          left: "14rem",
        }}
      ></div>
    </div>
  );
}
