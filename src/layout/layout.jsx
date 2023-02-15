import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ReactGA from "react-ga";
import Header from "./header/header";
import Footer from "./footer/footer";
import Backdrop from "../components/backdrop/backdrop";
import Hamburger from "../components/hamburger/hamburger";
import PagesLink from "../components/pagesLinks/pagesLinks";

const LayoutContainer = styled.div`
  min-height: 100vh;
`;

const Body = styled.div`
  min-height: calc(100vh - 140px);
  padding: 0 10vw;
  // background-color: #ffffff;
  // background-color: #000;

  @media (max-width: 765px) {
    padding: 80px 20px 0px;
    height: auto;
  }
`;

const Layout = ({ children, isFooterPresent }) => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const handleShowNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  useEffect(() => {
    ReactGA.initialize("UA-174186535-1");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <LayoutContainer>
      <PagesLink isNavbarOpen={isNavbarOpen} />
      <Backdrop isNavbarOpen={isNavbarOpen} />
      <Hamburger
        handleShowNavbar={handleShowNavbar}
        isNavbarOpen={isNavbarOpen}
      />
      <Header />
      <Body>{children}</Body>
      {isFooterPresent && <Footer />}
    </LayoutContainer>
  );
};

export default Layout;
