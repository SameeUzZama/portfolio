import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "../../layout/layout";
import TypeMe from "../../components/typeMe/typeMe";
import { AboutContainer, AboutHeader, AboutBody } from "./style";

export const About = () => {
  const [displayOne, setDisplayOne] = useState();
  const [displayTwo, setDisplayTwo] = useState();
  const [displayThree, setDisplayThree] = useState();
  const [displayFour, setDisplayFour] = useState();
  const [displayFive, setDisplayFive] = useState();
  const [displaySix, setDisplaySix] = useState();
  const [displaySeven, setDisplaySeven] = useState();
  const [displayEight, setDisplayEight] = useState();

  useEffect(() => {
    setTimeout(() => {
      setDisplayOne(true);
    }, 0);

    setTimeout(() => {
      setDisplayTwo(true);
    }, 500);

    setTimeout(() => {
      setDisplayThree(true);
    }, 1000);

    setTimeout(() => {
      setDisplayFour(true);
    }, 1500);

    setTimeout(() => {
      setDisplayFive(true);
    }, 2000);
    setTimeout(() => {
      setDisplaySix(true);
    }, 2500);
    setTimeout(() => {
      setDisplaySeven(true);
    }, 3000);
    setTimeout(() => {
      setDisplayEight(true);
    }, 3500);
  });
  return (
    <Layout isFooterPresent>
      <AboutContainer>
        <AboutHeader>about.</AboutHeader>
        <AboutBody
          displayFive={displayFive}
          displaySix={displaySix}
          displayEight={displayEight}
        >
          <div className="about__details">
            {displayOne && (
              <TypeMe duration={500}>
                React JS front end developer to build dynamic and responsive
                user interfaces design.
              </TypeMe>
            )}
            <br />
            {displayTwo && (
              <TypeMe duration={500}>
                Udemy certified. Proficient in Ecma javascript, hence can easily
                adapt to any of its frameworks
              </TypeMe>
            )}
            <br />
            {displayThree && (
              <TypeMe duration={500}>
                depending on the requirement of the job. Detail - oriented, with
                a strong knack for writing clean
              </TypeMe>
            )}
            <br />
            {displayFour && (
              <TypeMe duration={500}>and maintainable code.</TypeMe>
            )}
          </div>
          <section className="about__tech-section">
            <h3 className="about__tech-section__header">tech skills.</h3>
            <p className="about__tech-section__category">
              <span>proficient:</span>
              {displaySeven && (
                <TypeMe duration={500}>
                  HTML, CSS, Styled-components, ECMAScript, React.JS, Redux,
                  Git, Webpack, npm, yarn
                </TypeMe>
              )}
            </p>
          </section>
          <section className="about__buttonContainer">
            <Link to="/projects">Go to projects</Link>
            <span>&#10230;</span>
          </section>
        </AboutBody>
      </AboutContainer>
    </Layout>
  );
};

export default About;
