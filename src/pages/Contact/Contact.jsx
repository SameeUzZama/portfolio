import React from "react";
import Layout from "../../layout/layout";
import { ContactContainer } from "./style";
import { Link } from "react-router-dom";

const ALL_CONTACTS = [
  {
    icon: "fab fa-linkedin",
    link: "https://www.linkedin.com/in/samee-uz-zama/",
    label: "https://www.linkedin.com/in/samee-uz-zama/",
  },
  {
    icon: "fab fa-github-square",
    link: "https://github.com/SameeUzZama",
    label: "https://github.com/SameeUzZama",
  },
  {
    icon: "fas fa-envelope",
    link: "mailto:samizzama619@gmail.com",
    label: "samizzama619@gmail.com",
  },
];

export const Contact = () => {
  return (
    <Layout isFooterPresent={false}>
      <ContactContainer>
        <h1 className="contact__header">contact.</h1>
        <p className="contact__subheader">
          You can contact me through my mail or any of the platforms below:
        </p>
        <ul className="contact__links-wrapper">
          {ALL_CONTACTS.map((contact, i) => {
            const { icon, link, label } = contact;
            return (
              <li key={i}>
                <i className={icon}></i>
                <a href={link} target="_blank" rel="noopener noreferrer">
                  {label}
                </a>
              </li>
            );
          })}
        </ul>
        <section className="contact__buttonContainer">
          <Link to="/">Go to Home</Link>
          <span>&#10230;</span>
        </section>
      </ContactContainer>
    </Layout>
  );
};

export default Contact;
