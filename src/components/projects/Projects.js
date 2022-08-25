import React from "react";
import "./projects.css";
import { PROJECT_DETAILS } from "../../data";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <section className="all-projects">
      <div className="grid1">
        {PROJECT_DETAILS.map((data) => (
          <React.Fragment key={data.id}>
            <article>
              <img src={data.pic} alt="img" />
              <div className="pill-btns">
                <button class="pill-button">{data.tag[0]}</button>
                <button class="pill-button">{data.tag[1]}</button>
              </div>
              <div className="proj-title">
                <h1>{data?.title}</h1>
                {/* <p>{data?.description}</p> */}
              </div>
              <div className="text">
                {/* <h3>CARD 1</h3> */}
                <Link
                  className="pro-lnk"
                  to="#"
                  onClick={() =>
                    (window.location = `${data.viewLink}`)
                  }
                >
                  Live project
                </Link>

                <Link
                  className="pro-lnk"
                  to="#"
                  onClick={() =>
                    (window.location = `${data.sourceCode}`)
                  }
                >
                  Source code
                </Link>
              </div>
            </article>
            {/* <div className="project__card">
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
            </div> */}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Projects;
