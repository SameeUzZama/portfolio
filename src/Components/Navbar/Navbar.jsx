import React from "react";
import "./Navbar.css";
import Sun from "@iconscout/react-unicons/icons/uil-sun";
import Moon from "@iconscout/react-unicons/icons/uil-moon";
import Bars from "@iconscout/react-unicons/icons/uil-bars";
import Times from "@iconscout/react-unicons/icons/uil-times";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const handleClick = () => {
    theme.dispatch({ type: "toggle" });
  };

  return (
    <div className={darkMode ? "n_wrapper_dark" : "n_wrapper"}>
      <nav className="n_left">
        <Link to="Home" spy={true} smooth={true}>
          <div className="n_name">Samee Uz Zama</div>
        </Link>
        <span onClick={handleClick}>
          <span className="n_toggle" onClick={handleClick}>
            <Moon onClick={handleClick} />
            <Sun onClick={handleClick} />
            <span
              className="n-toggle-button"
              style={darkMode ? { left: "2px" } : { right: "2px" }}
              onClick={handleClick}
            ></span>
          </span>
        </span>
      </nav>
      <div className="n_right">
        <input type="checkbox" id="check" />

        <div className="n_list">
          <ul>
            <li>
              <Link
                spy={true}
                to="Home"
                smooth={true}
                activeClass="activeClass"
              >
                Home
              </Link>
            </li>
            <li>
              <Link spy={true} to="About" smooth={true}>
                About
              </Link>
            </li>
            <li>
              <Link spy={true} to="Projects" smooth={true}>
                Projects
              </Link>
            </li>
            <li>
              <Link spy={true} to="Contact" smooth={true}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <label htmlFor="check">
        <Bars id="open" />
        <Times id="close" />
      </label>
    </div>
  );
}
