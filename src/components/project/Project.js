import React from "react";
import { Link } from "react-router-dom";
import "./project.css";

const Project = () => {
  return (
    <section className="project">
      <div className="project-container">
        <h1 className="heading">Projects.</h1>
        <p>
          I like to showcase my work and thus, here are some of my projects.
        </p>
        <button>
          <Link to="/projects">View Project</Link>
        </button>
      </div>
      <div className="sepration"></div>

    </section>
  );
};

export default Project;
