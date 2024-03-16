import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const ProjectCard = ({ project, id }) => {
  const navigate = useNavigate();

  if (!project) return null;

  const { name, briefDescription, stakeholder } = project;

  const handleCardClick = () => {
    navigate(`/project/${id}`);
  };

  return (
    <Card 
      sx={{
        padding: '20px',
        backgroundColor: 'transparent',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.2s',
        animation: 'fadeIn 0.5s ease-out',
        mb: 2,
        borderLeft: 4,
        borderColor: '#ff6000',
        maxWidth: {
          xs: '90vw', // max-width 90% on extra-small (and smaller) screens
          md: '80vw'  // max-width 80% on medium (and larger) screens
        },
        '&:hover': {
          borderColor: '#e55900',
          transform: 'none',
        },
        '&:active': {
          transform: 'scale(0.98)',
        }
      }} 
      onClick={handleCardClick}
    >
      <CardActionArea>
        <CardContent sx={{ minHeight: 300, position: 'relative', pb: '40px' }}>
          <Typography variant="h5" component="div" sx={{ color: '#ff6000', mb: 1 }}>
            {name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {stakeholder}
          </Typography>
          <Typography variant="body1">
            {briefDescription}
          </Typography>
          <Typography 
            sx={{
              position: 'absolute',
              bottom: 10,
              right: 10,
              fontWeight: 'bold',
              color: '#ff6000', // Text color to match your theme
              '&:hover': {
                cursor: 'pointer' // Change cursor to indicate clickable
              }
            }}
          >
            Click to Learn More
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProjectCard;
