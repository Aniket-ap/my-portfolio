import React from "react";
import "./projects.css";
import { PROJECT_DETAILS } from "../../data";
import { Link } from "react-router-dom";
import githubSearchImg from "../../assets/image/bloghash-ss.jpg";

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
                  View &#62;
                </Link>

                <Link
                  className="link"
                  to="#"
                  onClick={() => (window.location = `${data.sourceCode}`)}
                >
                  source code &#62;
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
