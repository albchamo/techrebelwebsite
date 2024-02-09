import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import client from '../services/contenful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import './SingleProjectPage.css';
import Navbar from "../components/Navbar";
import BackButton from '../components/BackButton';
import ContactModal from '../components/ContactModal';
import { useLocale } from '../components/LocaleContext'; // Import the useLocale hook
import { Helmet } from 'react-helmet';


const SingleProjectPage = () => {
  const [project, setProject] = useState(null);
  const { id } = useParams(); // Get the project ID from the URL
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { locale } = useLocale(); // Use the locale from the context

  useEffect(() => {
    client.getEntry(id, { locale: locale }) // Include the locale parameter
      .then((response) => {
        setProject(response.fields);
      })
      .catch(error => {
        console.error("Error fetching project details from Contentful:", error);
      });
  }, [id, locale]); // Add locale to the dependency array

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <div>
       <Helmet>
        <title>{project.name} - Tech Rebel</title>
        <meta name="description" content={`Project by ${project.stakeholder}`} />
        <meta property="og:title" content={project.name} />
        <meta property="og:description" content={`Project by ${project.stakeholder}`} />
        <meta property="og:url" content={`https://techrebel.com/project/${project.id}`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
        <Navbar />
    <div className="project-container">
      <h1 className="project-title">{project.name}</h1>
      <p><strong>Stakeholder:</strong> {project.stakeholder}</p>
      <p><strong>Timeframe:</strong> {project.timeframe}</p>
      <p><strong>Tech Stack:</strong> {project.techStack.join(', ')}</p>
      {project.projectImage && <img className="project-image" src={project.projectImage.fields.file.url} alt={project.name} />}
      <div className="project-details">
        {documentToReactComponents(project.fullDetails)}
      </div>
      {project.relatedProjects && project.relatedProjects.length > 0 && (
        <div className="related-projects">
          <h2>Related Projects:</h2>
          <ul>
            {project.relatedProjects.map(related => (
              <li key={related.sys.id} className="related-project">
                <a href={`/project/${related.sys.id}`} className="related-project-link">{related.fields.name}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
    <BackButton text="Back" onClick={() => window.history.back()} />
    
    </div>
  );
};

export default SingleProjectPage;
