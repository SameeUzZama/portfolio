import React from "react";
import styled from "styled-components";

const BackdropContainer = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.95);
  width: 100%;
  height: 100%;
  z-index: 10;
  transform: translateY(-100vh);
  transition: transform 0.25s ease-in-out;

  ${({ isNavbarOpen }) => isNavbarOpen && "transform: translateY(0)"}
`;

export const Backdrop = ({ isNavbarOpen }) => {
  return <BackdropContainer isNavbarOpen={isNavbarOpen}></BackdropContainer>;
};

export default Backdrop;
