import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  console.log("Project data in ProjectCard:", project);
  if (!project) return null;  // Return early if project is undefined

  const { name, briefDescription, stakeholder, timeframe, techStack } = project;


  return (
    <div className="project-card">
      <div className="project-header">
        <h2 className="project-name">{name}</h2>
      </div>
      <hr className="divider" />
      <div className="project-content">
        <p className="project-info">
          <strong>Stakeholder:</strong> {stakeholder}
        </p>
        <p className="project-info">
          <strong>Timeframe:</strong> {timeframe}
        </p>
        <p className="project-info">
          <strong>Tech Stack:</strong> {techStack}
        </p>
      </div>
      <p className="project-description">{briefDescription}</p>
    </div>
  );
};

export default ProjectCard;