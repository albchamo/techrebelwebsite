import React, { useState } from 'react';
import { Card, CardContent, Typography, CardActionArea } from '@mui/material';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const ServiceItem = ({ content }) => {
  // State to manage whether the item is expanded or not
  const [isExpanded, setIsExpanded] = useState(false);

  // Toggle the expanded state
  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Card sx={{ backgroundColor: '#f5f5f5', border: '2px solid #000', marginBottom: '20px' }}>
      {/* Use CardActionArea for better accessibility */}
      <CardActionArea onClick={handleExpandClick}>
        <CardContent>
          <Typography variant="h5" component="h3" sx={{ color: '#000', marginBottom: '20px', padding: { xs: '20px', sm: '20px 40px' } }}>
            {content.title}
          </Typography>
          {/* Render the text only if isExpanded is true */}
          {isExpanded && documentToReactComponents(content.text)}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ServiceItem;
