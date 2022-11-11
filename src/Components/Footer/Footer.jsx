import React from "react";
import { useContext } from "react";
import wave from "../../Asset/wave.png";
import { themeContext } from "../../Context";
import "./Footer.css";

export const Footer = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="footer" id="Footer">
      <img src={wave} alt="footer" style={{ width: "100%", height: "100%" }} />
      <div className="f-content">
        <span style={{ color: darkMode ? "white" : "" }}>Samee Uz Zama</span>
        <span style={{ color: darkMode ? "white" : "" }}>
          Address : <br />
          12-2-458/4, Hill Colony, beside Gayatri College, Viswash Nagar,
          Mehdipatnam, Hyderabad, Telangana 500028
        </span>
        <span style={{ color: darkMode ? "white" : "" }}>
          Email : sameeuzzama8@gmail.com
        </span>
        <span style={{ color: darkMode ? "white" : "" }}>
          Contact : +91 84469 73368
        </span>
      </div>
    </div>
  );
};

export default Footer;
