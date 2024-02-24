import React, { useState } from 'react';
import { Card, Typography, Box, Accordion, AccordionDetails } from '@mui/material';

const ServiceCard = ({ content }) => {
  const [expanded, setExpanded] = useState(false);

  const handleAccordionChange = () => {
    setExpanded(!expanded);
  };

  // Handling text with line breaks
  const formattedText = content.text.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));

  return (
    <Accordion expanded={expanded} onChange={handleAccordionChange} sx={{ maxWidth: 345, margin: 'auto', mt: 2, boxShadow: 3, '&:before': { display: 'none' }, '&.Mui-expanded': { margin: 'auto' } }}>
      <Card sx={{ width: '100%', boxShadow: 'none' }}>
        <Box sx={{ padding: '16px', cursor: 'pointer' }} onClick={handleAccordionChange}>
          <Typography gutterBottom variant="h5" component="h3">
            {content.title}
          </Typography>
          <Typography variant="body1" component="div">
            {formattedText}
          </Typography>
        </Box>
      </Card>
      <AccordionDetails>
        <Typography>
          {content.description}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default ServiceCard;
