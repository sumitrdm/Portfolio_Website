import React from "react";
import "./Projects.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { projectsData } from "./../../assets/projectsData";
import ProjectCard from "./ProjectCard";
const Projects = () => {
  return (
    <div className="section-container">
      <Header heading="My projects" details="Here is the list of my projects" />

      <div className="project-card-container">
        {projectsData.map((project) => {
          return (
            <ProjectCard
              projectName={project.projectName}
              projectDescription={project.projectDescription}
              imageUrl={project.imageUrl}
              videoUrl={project.videoUrl}
              projecturl={project.projectUrl}
              githubLink={project.githubLink}
            />
          );
        })}
      </div>

      <Footer phrase="Check out " toAdress="/skills" link="my skills" />
    </div>
  );
};
export default Projects;
