import React from 'react';
import { Grid } from '@mui/material';
import ServiceItem from './ServiceItem';

const OurServicesSection = ({ content }) => {
  if (!Array.isArray(content)) {
    console.error('Expected an array for ourServices, received:', content);
    return null;
  }

  return (
    <Grid container direction="column" spacing={2} justifyContent="center" sx={{ maxWidth: { xs: '90vw', sm: '80vw' }, margin: '0 auto',  padding: '20px 0px 40px 0px'  }}>
      {content.map((serviceItem) => (
        <Grid item key={serviceItem.sys.id} xs={12} sx={{ padding : '0'}}>
          <ServiceItem content={serviceItem.fields} />
        </Grid>
      ))}
    </Grid>
  );
      }

export default OurServicesSection;
