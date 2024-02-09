import React, { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import './Projects.css';
import Navbar from '../components/Navbar';
import SocialLinks from '../components/SocialLinks';
import client from '../services/contenful';
import { useLocale } from '../components/LocaleContext';
import BackButton from '../components/BackButton';

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const { locale } = useLocale();

  useEffect(() => {
    client.getEntries({ content_type: 'project', locale: locale })
      .then((response) => {
        console.log("Fetched data from Contentful:", response.items);
        setProjects(response.items);
      })
      .catch(error => {
        console.error("Error fetching data from Contentful:", error);
      });
  }, [locale]);

  return (
    <div className="projects-page">
      <header>
        <Navbar />
      </header>
      
      {projects.map((project) => (
        project.fields ? <ProjectCard key={project.sys.id} id={project.sys.id} project={project.fields} /> : null
      ))}
      
      <BackButton text="Back" onClick={() => window.history.back()} />
    </div>
  );
};

export default ProjectsPage;