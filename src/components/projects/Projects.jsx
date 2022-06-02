import React, { useState } from "react";
import "./projects.css";
import data_projects from "./data_projects";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

function Projects() {
  const [projects, setProjects] = useState(data_projects);
  const [active, setActive] = useState("All");

  const handleFilterCategory = (name) => {
    const filteredItem = data_projects.filter((project) =>
      project.category.includes(name)
    );
    setProjects(filteredItem);
    setActive(name);
  };

  const projects_variant = {
    hidden: {
      opacity: 0,
      y: "50vh",
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        duration: 0.6,
      },
    },
  };
  return (
    <motion.div
      className="container projects"
      variants={projects_variant}
      initial="hidden"
      animate="visible"
    >
      <div className="projects-navbar">
        <div
          className={
            (active === "All" && "project-navbar-active") +
            " projects-navbar-item"
          }
          onClick={() => {
            setProjects(data_projects);
            setActive("All");
          }}
        >
          All
        </div>
        <div
          className={
            (active === "react" && "project-navbar-active") +
            " projects-navbar-item"
          }
          onClick={() => handleFilterCategory("react")}
        >
          React js
        </div>
        <div
          className={
            (active === "vanilla" && "project-navbar-active") +
            " projects-navbar-item"
          }
          onClick={() => handleFilterCategory("vanilla")}
        >
          Vanilla js
        </div>
      </div>
      <div className="row">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </motion.div>
  );
}

export default Projects;
