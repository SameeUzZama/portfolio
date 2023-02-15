import React from "react";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import { Projects } from "./pages/Projects/Projects";
import { Contact } from "./pages/Contact/Contact";

const GlobalStyles = createGlobalStyle`
  *, 
  *:before, 
  *:after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
  }

  body{
    font-size: 1.4rem;
    font-family: sans-serif;
    background-color: #000;
    background-color: #110421;
  }

  h1{
    font-size: 70px;
    font-weight: 600;
  }
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
