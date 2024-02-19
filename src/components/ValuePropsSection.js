import React from 'react';
import ValueProp from './ValueProp';
import { Grid } from '@mui/material';

const ValuePropsSection = ({ content }) => {
  if (!Array.isArray(content)) {
    console.error('Expected an array for valueProps, received:', content);
    return null;
  }

  return (
    <Grid container spacing={2} sx={{ maxWidth: '90vw', margin: '0 auto', padding: '40px 0' }}>
      {content.map((valueProp) => (
        <ValueProp key={valueProp.sys.id} content={valueProp.fields} />
      ))}
    </Grid>
  );
};

export default ValuePropsSection;
