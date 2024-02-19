import React from 'react';
import { Card, CardContent, Grid, Typography } from '@mui/material';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const ServiceItem = ({ content }) => {
  return (
    <Card sx={{ backgroundColor: '#f5f5f5', border: '2px solid #000', marginBottom: '20px' }}>
      <CardContent>
        <Typography variant="h5" component="h3" sx={{ color: '#000', marginBottom: '20px', padding: { xs: '20px', sm: '20px 40px' } }}>
          {content.title}
        </Typography>
        {documentToReactComponents(content.text)}
      </CardContent>
    </Card>
  );
};

export default ServiceItem;
