import React from "react";
import "./projects.css";
import { PROJECT_DETAILS } from "../../data";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <section className="all-projects">
      <div className="projects">
        {PROJECT_DETAILS.map((data) => (
          <>
            <div className="cards_item">
              <div className="card">
                <div className="card_image">
                  <img src={data.pic} alt="project pic" />
                </div>
                <div className="card_content">
                  <h2 className="card_title">{data.title}</h2>
                  <p className="card_text">{data.description}</p>
                  <div className="btn">
                    <button>
                      <Link
                        to="#"
                        onClick={() => (window.location = `${data.viewLink}`)}
                      >
                        View
                      </Link>
                    </button>
                    <button>
                      <Link
                        to="#"
                        onClick={() => (window.location = `${data.sourceCode}`)}
                      >
                        sourceCode
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </section>
  );
};

export default Projects;
