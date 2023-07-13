import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  const { Name, Description, Stakeholder, Timeframe, TechStack, Status } = project.fields;

  return (
    <div className="project-card">
      <div className="project-header">
        <h2 className="project-name">{Name}</h2>
        <p className="project-status">{Status}</p>
      </div>
      <hr className="divider" />
      <div className="project-content">
        <p className="project-info">
          <strong>Stakeholder:</strong> {Stakeholder}
        </p>
        <p className="project-info">
          <strong>Timeframe:</strong> {Timeframe}
        </p>
        <p className="project-info">
          <strong>Tech Stack:</strong> {TechStack}
        </p>
      </div>
      <p className="project-description">{Description}</p>
    </div>
  );
};

export default ProjectCard;