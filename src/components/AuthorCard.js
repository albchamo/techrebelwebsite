import React, { useState, useEffect } from 'react';
import client from '../services/contenful';
import { Link as RouterLink } from 'react-router-dom';
import { Card, CardMedia, CardContent, Typography, CardActionArea } from '@mui/material';

function AuthorCard({ authorName }) {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    client.getEntries({
      'content_type': 'componentAuthor', // Make sure this matches your Contentful content type ID
      'fields.name': authorName
    })
    .then((response) => {
      if (response.items.length > 0) {
        setAuthor(response.items[0]);
      }
    })
    .catch((error) => {
      console.error("Error fetching author from Contentful:", error);
    });
  }, [authorName]);

  if (!author) {
    return null; // or a MUI loading spinner/placeholder could be used here
  }

  return (
    <Card sx={{
      width: { xs: '100%', sm: 'calc(30% - 1rem)' }, // Responsive width
      margin: '1rem auto',
      overflow: 'hidden',
      transition: 'transform 0.3s ease',
      ':hover': {
        transform: 'scale(1.05)',
        borderColor: '#ff6000', // Change border color on hover
      },
      backgroundColor: '#000000', // Black background
      color: '#ffffff', // White text color
      padding: '1rem',
      border: '1px solid #ffffff', // White border
      boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
      boxSizing: 'border-box',
    }}>
      <CardActionArea component={RouterLink} to={`/author/${author.sys.id}`}>
      <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <CardMedia
          component="img"
          image={author.fields.avatar.fields.file.url}
          alt={author.fields.name}
          sx={{ maxWidth: 150, maxHeight: 150, borderRadius: '50%', margin: '0 auto' }} // Ensuring margin auto for horizontal centering
        />
        <Typography gutterBottom variant="h5" component="h3" sx={{ textAlign: 'center', marginTop: '20px' }}>
          {author.fields.name}
        </Typography>
      </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default AuthorCard;
