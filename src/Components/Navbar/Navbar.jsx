import React from "react";
import "./Navbar.css";
import Sun from "@iconscout/react-unicons/icons/uil-sun";
import Moon from "@iconscout/react-unicons/icons/uil-moon";
import { themeContext } from "../../Context";
import { useContext } from "react";

export default function Navbar() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const handleClick = () => {
    theme.dispatch({ type: "toggle" });
  };

  return (
    <div className="n_wrapper">
      <div className="n_left">
        <div className="n_name">Samee Uz Zama</div>
        <span className="n_toggle" onClick={handleClick}>
          <Moon />
          <Sun />
          <span
            className="n-toggle-button"
            style={darkMode ? { left: "2px" } : { right: "2px" }}
            onClick={handleClick}
          ></span>
        </span>
      </div>
      <div className="n_right">
        <div className="n_list">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
          </ul>
        </div>
        <button className="button n_button">Contact</button>
      </div>
    </div>
  );
}
