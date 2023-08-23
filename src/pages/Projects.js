import React, { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import './Projects.css';
import Navbar from '../components/Navbar';
import SocialLinks from '../components/SocialLinks';
import client from '../services/contenful';  // <-- Import the Contentful client

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    client.getEntries({ content_type: 'project' })
      .then((response) => {
        console.log("Fetched data from Contentful:", response.items);
        setProjects(response.items);
      })
      .catch(error => {
        console.error("Error fetching data from Contentful:", error);
      });
}, []);

  console.log("Projects data:", projects);

  return (
    <div className="projects-page">
      <header>
        <Navbar />
      </header>
      
      {projects.map((project) => (
  project.fields ? <ProjectCard key={project.sys.id} project={project.fields} /> : null
))}
      <div className="social-links-spacing">
        <SocialLinks />
      </div>
    </div>
  );
};

export default ProjectsPage;
