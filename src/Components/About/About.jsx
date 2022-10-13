import React, { useEffect, useState } from "react";
import axios from "axios";
import "./About.css";
import Carousel from "react-bootstrap/Carousel";
// import Heart from "../../Asset/heartemoji.png";
// import Glasses2 from "../../Asset/glasses.png";
// import Humble from "../../Asset/humble.png";

export default function About() {
  const [skills, setSkills] = useState([]);

  const getApi = async () => {
    const result = await axios.get("http://localhost:3003/cards");
    setSkills(result.data);
  };
  useEffect(() => {
    getApi();
  }, []);
  return (
    <div className="About">
      <div className="a_left">
        <span>My Awesome</span>
        <span>Skills</span>
        <span>
          I have a hands-on efficient coding website and use modern HTML5, CSS3,
          Bootstrap, JavaScript, ECMAScript, React JS, React Hooks, React
          Bootstrap and React Redux Building state-of-the-art, easy to use,
          user-friendly websites are truly a passion of mine, and I am confident
          I would be an excellent addition to your organization. In addition to
          my knowledge base, I actively seek out new technologies and stay up-to
          date on industry trends and advancements.
        </span>
        <button className="button a_button">Download CV</button>
        <div className="blur a_blu r" style={{ background: "ABF1FF94" }}></div>
      </div>
      <div className="a_right">
        <div className="a_right_card">
          {/* <Carousel> */}
          {skills.map((skill, index) => (
            <div className="card">
              <div className="imgBx">
                <img src={skill.img} alt="#" />
              </div>
              <div className="content">
                <div className="details">
                  <h2>{skill.skill}</h2>
                  <div className="data">
                    <h3>Last Used : {skill.used}</h3>
                    <h3>Version : {skill.version}</h3>
                    <h3>Proficency : {skill.proficency}%</h3>
                    <h3>Experience : {skill.experience} : in Months</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* </Carousel> */}
        </div>
      </div>
    </div>
  );
}
