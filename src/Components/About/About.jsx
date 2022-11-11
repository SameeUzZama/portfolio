import React, { useEffect, useState } from "react";
import "./About.css";
import { themeContext } from "../../Context";
import { useContext } from "react";
import dbjson from "../../db";

export default function About() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const [skills, setSkills] = useState([]);

  useEffect(() => {
    setSkills(dbjson.cards);
  }, []);

  return (
    <div className="About" id="About">
      <div className="a_left">
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>Skills</span>
        <span style={{ color: darkMode ? "white" : "" }}>
          I have a hands-on efficient coding website and use modern HTML5, CSS3,
          Bootstrap, JavaScript, ECMAScript, React JS, React Hooks, React
          Bootstrap and React Redux Building state-of-the-art, easy to use,
          user-friendly websites are truly a passion of mine, and I am confident
          I would be an excellent addition to your organization. In addition to
          my knowledge base, I actively seek out new technologies and stay up-to
          date on industry trends and advancements.
        </span>
      </div>
      <div className="a_right">
        <div className="a_right_card">
          {skills.map((skill, key) => (
            <div className="card" key={key}>
              <img src={skill.img} alt="#" />
              <span>{skill.skill}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
