import React from 'react';
import { Card, CardContent, Grid,  Typography } from '@mui/material';

const ValueProp = ({ content }) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ bgcolor: '#f0f0f0', border: '2px solid #000', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', padding: '20px', width: '100%' }}>
        <CardContent>
          <Typography variant="h6" component="h3" sx={{ color: '#000', marginBottom: '20px' }}>
            {content.title}
          </Typography>
          <Typography variant="body1">
            {content.text}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ValueProp;
