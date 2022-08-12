import React from "react";
import HeroImage from "../../assets/image/hero.svg";

import { BsLinkedin, BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

import "./heroSection.css";

const HeroSection = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="content">
          <div className="col-1">
            <span className="my-name">Hi, I’m <span>Aniket Pradhan</span> </span>
            <p>aspiring fullstack developer.</p>
            <div className="icons">
              <Link
                to="#"
                onClick={() =>
                  (window.location = "mailto:aniket.pro@outlook.com")
                }
                className="links"
              >
                <MdEmail size={40} />
              </Link>
              <a
                className="links"
                href="https://www.linkedin.com/in/aniket-pradhan-592242219/"
                target="_blank"
              >
                <BsLinkedin size={40} />
              </a>
              <a
                className="links"
                href="https://github.com/Aniket-ap"
                target="_blank"
              >
                <BsGithub size={40} />
              </a>
            </div>
          </div>
          <div className="col-2">
            <img src={HeroImage} alt="developer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
