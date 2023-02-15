import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderContainer = styled.div`
  width: 100%;
  height: 70px;
  background-color: #faf9f9;
  background-color: #000;
  background-color: #110421;
  top: 0;
  display: flex;
  align-items: center;
  color: #fff;
  padding-left: 5vw;
  z-index: 5;
  position: fixed;

  @media (max-width: 765px) {
    position: fixed;
    z-index: 5;
  }

  a {
    text-transform: uppercase;
    font-weight: 600;
    color: #fff;
    text-decoration: none;
  }
`;
const HeaderFix = styled.div`
  height: 70px;
  width: 100%;
`;

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <Link to="/">Samee Uz Zama</Link>
      </HeaderContainer>
      <HeaderFix />
    </>
  );
};

export default Header;
