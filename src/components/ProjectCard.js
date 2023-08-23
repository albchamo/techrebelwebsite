import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProjectCard.css';

const ProjectCard = ({ project, id }) => {
  const navigate = useNavigate();

  if (!project) return null;

  const { name, briefDescription, stakeholder } = project;

  const handleCardClick = () => {
    navigate(`/project/${id}`);
  };

  return (
    <div className="project-card" onClick={handleCardClick}>
      <div className="project-header">
        <h2 className="project-name">{name}</h2>
        <span className="project-status">{stakeholder}</span>
      </div>
      <hr className="divider" />
      <div className="project-content">
        <p className="project-description">{briefDescription}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
