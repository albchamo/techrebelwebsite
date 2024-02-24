import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Container, Typography } from '@mui/material';

const HeroSection = ({ content }) => {
  return (
    <Container sx={{ textAlign: 'center', padding: { xs: '23vh 5vw', md: '40vh 5vw' } , backgroundColor: '#fff' }}>
      <Typography variant="h1" sx={{ fontSize: 'clamp(2rem, 2vw, 5rem)', marginBottom: '20px', color: '#000' }}>
        {documentToReactComponents(content)}
      </Typography>
      {/* Apply similar styling for paragraphs if necessary */}
    </Container>
  );
};

export default HeroSection;
