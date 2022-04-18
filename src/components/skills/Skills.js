import React from "react";
import "./skills.css";

import { FaReact, FaHtml5, FaCss3, FaBootstrap, FaGit } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiRedux } from "react-icons/si";

const Skills = () => {
  return (
    <section className="skills">
      <div className="skills-container">
        <h1 className="heading">My Skills.</h1>
        <div className="skills-icons">
          <i>
            <FaReact size={50} />
          </i>
          <i>
            <IoLogoJavascript size={50} />
          </i>
          <i>
            <FaHtml5 size={50} />
          </i>
          <i>
            <FaCss3 size={50} />
          </i>
          <i>
            <FaBootstrap size={50} />
          </i>
          <i>
            <FaGit size={50} />
          </i>
          <i>
            <SiRedux size={50} />
          </i>
        </div>
      </div>

      <div className="sepration"></div>
    </section>
  );
};

export default Skills;
