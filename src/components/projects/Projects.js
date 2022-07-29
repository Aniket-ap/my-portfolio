import React from "react";
import "./projects.css";
import { PROJECT_DETAILS } from "../../data";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <section className="all-projects">
      <div className="projects">
        {PROJECT_DETAILS.map((data) => (
          <React.Fragment key={data.id}>
            <div className="project__card">
              <div className="card__img">
                <img src={data.pic} alt="" />
              </div>

              <div className="card__data">
                <Link
                  className="link"
                  to="#"
                  onClick={() => (window.location = `${data.viewLink}`)}
                >
                  Live project
                </Link>

                <Link
                  className="link"
                  to="#"
                  onClick={() => (window.location = `${data.sourceCode}`)}
                >
                  Source code
                </Link>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Projects;
