import React from "react";
import github from "../../assets/icons/github.svg";
function ProjectCard({
  project: { name, image, deployed_url, github_url, category },
}) {
  return (
    <div className="project-card col-md-6 col-lg-4 my-2">
      <figure className="project-card-wrapper">
        <a href={deployed_url} target="_blank" rel="noopener noreferrer">
          <img src={image} alt={name} className="project-card-image"></img>
        </a>
        <div className="project-card-title">
          <a href={github_url} target="_blank" rel="noopener noreferrer">
            <img
              src={github}
              alt="github-link"
              className="project-card-icon"
            ></img>
          </a>
          {name}
        </div>
      </figure>
    </div>
  );
}

export default ProjectCard;
