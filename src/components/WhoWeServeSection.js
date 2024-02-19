import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import ServiceCard from './ServiceCard'; // Assuming ServiceCard will also be refactored to use MUI

const WhoWeServeSection = ({ content }) => {
  if (!Array.isArray(content)) {
    console.error('Expected an array for whoWeServes, received:', content);
    return null;
  }

  return (
    <Grid container spacing={2} justifyContent="center" sx={{ padding: '20px 0 40px' }}>
      {content.map((serviceCardEntry) => (
        <Grid item key={serviceCardEntry.sys.id} xs={12} sm={6} md={4}>
          <ServiceCard content={serviceCardEntry.fields} />
        </Grid>
      ))}
    </Grid>
  );
};

export default WhoWeServeSection;
