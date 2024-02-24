import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import client from '../services/contenful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Container, Typography, Card, CardMedia, Box, Grid, Link, Button } from '@mui/material';
import Navbar from "../components/Navbar";
import BackButton from '../components/BackButton'; // Ensure this is using MUI
import ContactModal from '../components/ContactModal'; // Ensure this is adapted to MUI
import { useLocale } from '../components/LocaleContext';
import { Helmet } from 'react-helmet';
import { BLOCKS } from '@contentful/rich-text-types';


const SingleProjectPage = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const { locale } = useLocale();

  useEffect(() => {
    client.getEntry(id, { locale: locale })
      .then((response) => {
        setProject(response.fields);
      })
      .catch(error => {
        console.error("Error fetching project details from Contentful:", error);
      });
  }, [id, locale]);

  if (!project) {
    return <Typography>Loading...</Typography>;
  }

  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const imageUrl = node.data.target.fields.file.url;
        return <CardMedia component="img" image={imageUrl} alt="Embedded Image" sx={{ width: '100%', height: 'auto', margin: '20px auto' }} />;
      }
    }
  };

  return (
    <>
      <Helmet>
      <title>{project.name} - Tech Rebel</title>
        <meta name="description" content={`Project by ${project.stakeholder}`} />
        <meta property="og:title" content={project.name} />
        <meta property="og:description" content={`Project by ${project.stakeholder}`} />
        <meta property="og:url" content={`https://techrebel.com/project/${project.id}`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Navbar />
      <Container sx={{ my: 4 }}>
        <Typography variant="h2" sx={{ color: '#FF6000', mb: 2 }}>{project.name}</Typography>
        
        <Typography variant="body1"><strong>Stakeholder:</strong> {project.stakeholder}</Typography>
        <Typography variant="body1"><strong>Timeframe:</strong> {project.timeframe}</Typography>
        <Typography variant="body1"><strong>Services Provided:</strong> {project.techStack.join(', ')}</Typography>
        
        {project.projectImage && 
          <Card sx={{ maxWidth: '100%', boxShadow: 'none', mb: 2 }}>
            <CardMedia
              component="img"
              image={project.projectImage.fields.file.url}
              alt={project.name}
              sx={{ maxHeight: 500, width: '100%', maxWidth: '100%', margin: 'auto' }}
            />
          </Card>
        }

        <Box sx={{ my: 4, paddingBottom: '3rem' }}>
          {documentToReactComponents(project.fullDetails, options)}
        </Box>


        <BackButton text="Back" onClick={() => window.history.back()} sx={{ mt: 4 }} />
      </Container>
    </>
  );
};

export default SingleProjectPage;
