import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="n_wrapper">
      <div className="n_left">
        <div className="n_name">Samee Uz Zama</div>
        <span className="n_toggle">toggle</span>
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
