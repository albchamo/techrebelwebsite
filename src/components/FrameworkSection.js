import React from 'react';
import FrameworkStep from './FrameworkStep';
import { Grid } from '@mui/material';

const FrameworkSection = ({ content }) => {
  if (!Array.isArray(content)) {
    console.error('Expected an array for framework, received:', content);
    return null;
  }

  const sortedContent = content.sort((a, b) => a.fields.number - b.fields.number);

  return (
    <Grid container spacing={2} justifyContent={'center '} sx={{ maxWidth: '90vw', margin: '0 auto', padding: '40px 0' }}>
      {sortedContent.map((frameworkStep) => (
        <FrameworkStep key={frameworkStep.sys.id} content={frameworkStep.fields} />
      ))}
    </Grid>
  );
};

export default FrameworkSection;
