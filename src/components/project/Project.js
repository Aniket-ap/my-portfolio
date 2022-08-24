import React from "react";
import { Link } from "react-router-dom";
import { PROJECT_DETAILS } from "../../data";
import "./project.css";

const Project = () => {
  return (
    <section className="project">
      <div className="project-container">
        <h1 className="heading">Projects.</h1>
        <p>
          I like to showcase my work and thus, here are some of my projects.
        </p>
        {/* Project show in main page */}
        <div className="project-cards-section">
          <main className="grid">
          <article>
              <img src={PROJECT_DETAILS[16].pic} alt="img" />
              <div className="text">
                {/* <h3>CARD 1</h3> */}
                <Link
                  className="pro-lnk"
                  to="#"
                  onClick={() =>
                    (window.location = `${PROJECT_DETAILS[10].viewLink}`)
                  }
                >
                  Live project
                </Link>

                <Link
                  className="pro-lnk"
                  to="#"
                  onClick={() =>
                    (window.location = `${PROJECT_DETAILS[10].sourceCode}`)
                  }
                >
                  Source code
                </Link>
              </div>
            </article>
            <article>
              <img src={PROJECT_DETAILS[15].pic} alt="img" />
              <div className="text">
                {/* <h3>CARD 1</h3> */}
                <Link
                  className="pro-lnk"
                  to="#"
                  onClick={() =>
                    (window.location = `${PROJECT_DETAILS[11].viewLink}`)
                  }
                >
                  Live project
                </Link>

                <Link
                  className="pro-lnk"
                  to="#"
                  onClick={() =>
                    (window.location = `${PROJECT_DETAILS[11].sourceCode}`)
                  }
                >
                  Source code
                </Link>
              </div>
            </article>
            <article>
              <img src={PROJECT_DETAILS[9].pic} alt="img" />
              <div className="text">
                {/* <h3>CARD 1</h3> */}
                <Link
                  className="pro-lnk"
                  to="#"
                  onClick={() =>
                    (window.location = `${PROJECT_DETAILS[9].viewLink}`)
                  }
                >
                  Live project
                </Link>

                <Link
                  className="pro-lnk"
                  to="#"
                  onClick={() =>
                    (window.location = `${PROJECT_DETAILS[9].sourceCode}`)
                  }
                >
                  Source code
                </Link>
              </div>
            </article>
            <article>
              <img src={PROJECT_DETAILS[14].pic} alt="img" />
              <div className="text">
                {/* <h3>CARD 1</h3> */}
                <Link
                  className="pro-lnk"
                  to="#"
                  onClick={() =>
                    (window.location = `${PROJECT_DETAILS[14].viewLink}`)
                  }
                >
                  Live project
                </Link>

                <Link
                  className="pro-lnk"
                  to="#"
                  onClick={() =>
                    (window.location = `${PROJECT_DETAILS[14].sourceCode}`)
                  }
                >
                  Source code
                </Link>
              </div>
            </article>
            <article>
              <img src={PROJECT_DETAILS[12].pic} alt="img" />
              <div className="text">
                {/* <h3>CARD 1</h3> */}
                <Link
                  className="pro-lnk"
                  to="#"
                  onClick={() =>
                    (window.location = `${PROJECT_DETAILS[12].viewLink}`)
                  }
                >
                  Live project
                </Link>

                <Link
                  className="pro-lnk"
                  to="#"
                  onClick={() =>
                    (window.location = `${PROJECT_DETAILS[12].sourceCode}`)
                  }
                >
                  Source code
                </Link>
              </div>
            </article>
            <article>
              <img src={PROJECT_DETAILS[13].pic} alt="img" />
              <div className="text">
                {/* <h3>CARD 1</h3> */}
                <Link
                  className="pro-lnk"
                  to="#"
                  onClick={() =>
                    (window.location = `${PROJECT_DETAILS[13].viewLink}`)
                  }
                >
                  Live project
                </Link>

                <Link
                  className="pro-lnk"
                  to="#"
                  onClick={() =>
                    (window.location = `${PROJECT_DETAILS[13].sourceCode}`)
                  }
                >
                  Source code
                </Link>
              </div>
            </article>
          </main>
        </div>
        <button>
          <Link to="/projects">View All Projects</Link>
        </button>
      </div>
      <div className="sepration"></div>
    </section>
  );
};

export default Project;
