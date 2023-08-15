import React from 'react';
import ProjectCard from './components/ProjectCard';
import './Projects.css';
import Navbar from './components/Navbar';
import SocialLinks from './components/SocialLinks';
import projects from './projectsData';  // <-- Importing the projects data

const ProjectsPage = () => {
  return (
    <div className="projects-page">
      <header>
        <Navbar />
      </header>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
      <div className="social-links-spacing">
        <SocialLinks />
      </div>
    </div>
  );
};

export default ProjectsPage;
