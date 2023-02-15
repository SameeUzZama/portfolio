import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ReactGA from "react-ga";
import Layout from "../../layout/layout";
import { ProjectContainer, ProjectHeader, ProjectBodyTwo } from "./style";
import { ALL_PROJECTS } from "./data";

export const Projects = () => {
  const [setDisplayOne] = useState();
  const [setDisplayTwo] = useState();

  const handleTriggerGoogleAnalyticsEvent = (title) => {
    ReactGA.event({
      category: title,
      action: "Click this project",
    });
  };

  useEffect(() => {
    setTimeout(() => {
      setDisplayOne(true);
    }, 500);
    setTimeout(() => {
      setDisplayTwo(true);
    }, 1000);
  });

  return (
    <Layout isFooterPresent>
      <ProjectContainer>
        <ProjectHeader>projects.</ProjectHeader>
        <ProjectBodyTwo>
          <ul className="projects__body">
            {ALL_PROJECTS.map((project, i) => {
              const { title, details, link, image, tags } = project;
              return (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleTriggerGoogleAnalyticsEvent(title)}
                >
                  <li key={i} className="project">
                    <div className="project__info">
                      <h4>{title}</h4>
                      <p>{details}</p>
                      <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => handleTriggerGoogleAnalyticsEvent(title)}
                      >
                        Visit site
                      </a>

                      <span className="tag">
                        {tags.map((item, index) => {
                          if (index !== 0) {
                            return <li key={index}>- {item}</li>;
                          }
                          return <li key={index}>{item}</li>;
                        })}
                      </span>
                    </div>

                    <div
                      className="project__image"
                      style={{ backgroundImage: `url(${image})` }}
                    ></div>
                    <div className="project__overlay"></div>
                  </li>
                </a>
              );
            })}
          </ul>
          <section className="projects__buttonContainer">
            <Link to="/contact">Go to Contacts</Link>
            <span>&#10230;</span>
          </section>
        </ProjectBodyTwo>
      </ProjectContainer>
    </Layout>
  );
};

export default Projects;
