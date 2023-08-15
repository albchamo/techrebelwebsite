import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProjectCard from './components/ProjectCard';
import './Projects.css';
import Navbar from './components/Navbar';
import SocialLinks from './components/SocialLinks';

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(
          'https://api.airtable.com/v0/appBHWZIhC3HrzOcx/Projects',
          {
            headers: {
              Authorization: 'Bearer pateLOnFo5Ktsjgom.c0253d62fee577a813328ad88801c7b75626cf769e3a8cbb2df4abb2f72bd2ae',
            },
          }
        );

        setProjects(response.data.records);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="projects-page">
        <header>
        <Navbar />
        </header>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}

<SocialLinks />
    </div>
  );
};

export default ProjectsPage;
