import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <span>&#169; 2022 My Portfolio.</span>
        <span>
          Made with <span style={{color: "red"}}>❤</span>  by <span className="footer-name">Aniket Pradhan</span>.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
