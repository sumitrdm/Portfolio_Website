/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./Projects.css";
const ProjectCard = (props) => {
  return (
    <div className="project-card">
      <div className="image-container">
        <a className="project-external-link" href={props.projecturl}>
          <img
            src={props.imageUrl}
            alt="image of card"
            className="project-image"
          ></img>
        </a>
      </div>
      <div className="project-details-container">
        <h2 className="project-heading">{props.projectName}</h2>
        <p className="project-details">{props.projectDescription}</p>

        <a target="_blank" href={props.videoUrl} className="project-yt-link">
          Live Project!
        </a>
        <a target="_blank" href={props.githubLink} className="project-yt-link">
          Github Link!
        </a>
      </div>
    </div>
  );
};
export default ProjectCard;
