import React from 'react';
import { Card, CardContent, Grid,  Typography, Box } from '@mui/material';

const FrameworkStep = ({ content }) => {
  return (
    <Grid item xs={12} sm={6}>
      <Card sx={{ bgcolor: 'primary', color: 'black', border: '2px solid black', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', padding: '20px', marginBottom: '20px' }}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
            <Typography variant="h6" component="span" sx={{ fontWeight: 'bold', marginRight: '10px' }}>
              {content.number}.
            </Typography>
            <Typography variant="h6" component="span">
              {content.title}
            </Typography>
          </Box>
          <Typography>
            {content.text}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default FrameworkStep;
