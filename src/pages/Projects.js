import React, { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard'; // Make sure this is using MUI
import Navbar from '../components/Navbar';
import client from '../services/contenful';
import { useLocale } from '../components/LocaleContext';
import BackButton from '../components/BackButton'; // Assume this is adapted to MUI
import { Container, Grid } from '@mui/material';

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const { locale } = useLocale();

  useEffect(() => {
    client.getEntries({ content_type: 'project', locale: locale })
      .then((response) => {
        setProjects(response.items);
      })
      .catch(error => {
        console.error("Error fetching data from Contentful:", error);
      });
  }, [locale]);

  return (
    <>
      <Navbar />
      <Container sx={{ my: 4 }}>
        <Grid container spacing={4} justifyContent="center"> {/* Adjusted to center the cards */}
          {projects.map((project) => (
            project.fields ? 
              <Grid item xs={12} sm={12} md={12} key={project.sys.id} sx={{ display: 'flex', justifyContent: 'center' }}> {/* Ensures cards are centered */}
                <ProjectCard id={project.sys.id} project={project.fields} />
              </Grid> : null
          ))}
        </Grid>
      </Container>
      <BackButton text="Back" onClick={() => window.history.back()} sx={{ margin: '2rem 0' }} />
    </>
  );
};

export default ProjectsPage;
