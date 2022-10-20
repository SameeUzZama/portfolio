import React from "react";
import wave from "../../Asset/wave.png";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <img src={wave} alt="" style={{ width: "100%", height: "100%" }} />
      <div className="f-content">
        <span>Email : samiuzzama619@gmail.com</span>
        <span>Contact : +91 8378825832</span>
      </div>
    </div>
  );
}
