import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const ServiceCard = ({ content }) => {
  return (
    <Card sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      ':hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 10px 15px rgba(0, 0, 0, 0.2)',
      },
    }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h3" sx={{ textAlign: 'center', marginBottom: '15px' }}>
          {content.title}
        </Typography>
        <Typography variant="body1" component="p" sx={{ textAlign: 'center' }}>
          {content.text}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
