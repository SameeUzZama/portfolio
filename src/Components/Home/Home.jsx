import React from "react";
import "./Home.css";
import Github from "../../Asset/github.png";
import Linkedin from "../../Asset/linkedin.png";
import Code from "../../Asset/code.png";
import Glasses1 from "../../Asset/glassesimoji.png";
import Crown from "../../Asset/crown.png";

export default function Home() {
  return (
    <div className="home">
      <div className="h_left">
        <div className="h_name">
          <span>Hey! I Am</span>
          <span>Samee Uz Zama</span>
          <span>
            React JS developer who is for designing and implementing UI
            components for JavaScript-based web applications with the use of
            open- source library infrastructure. My passion became my
            profession, I'm a driven, energetic and proactive tech
            professionally.
          </span>
        </div>
        <button className="button h_button">Hire Me</button>
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
    </div>
  );
}
