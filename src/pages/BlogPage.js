import React, { useState, useEffect } from 'react';
import client from '../services/contenful';
import { Link as RouterLink } from 'react-router-dom';
import { Container, Grid, Card, CardContent, CardActionArea, Paper,  Typography, Select, MenuItem, FormControl, InputLabel, Box } from '@mui/material';
import Navbar from '../components/Navbar';
import BackButton from '../components/BackButton'; // Assume this is also refactored to MUI
import CategoryFilter from '../components/CategoryFilter'; // Consider refactoring this as well
import { useLocale } from '../components/LocaleContext';

function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedAuthor, setSelectedAuthor] = useState('');
  const { locale } = useLocale();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['General', 'News', 'Research'];

  useEffect(() => {
    client.getEntries({ content_type: 'pageBlogPost', locale: locale })
      .then((response) => {
        const sortedPosts = response.items.sort((a, b) => new Date(b.sys.createdAt) - new Date(a.sys.createdAt));
        setPosts(sortedPosts);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching data from Contentful:", error);
        setLoading(false);
      });
  }, [locale]);

  const handleAuthorChange = (event) => {
    setSelectedAuthor(event.target.value);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  let filteredPosts = posts;
  if (selectedAuthor) {
    filteredPosts = filteredPosts.filter(post => post.fields.author.fields.name === selectedAuthor);
  }
  if (selectedCategory !== 'All') {
    filteredPosts = filteredPosts.filter(post => 
      post.fields.category.some(cat => cat.fields.name === selectedCategory)
    );
  }

  return (
    <Container sx={{ paddingBottom: '5rem' }}>
      <Navbar />
      <Box sx={{ my: 2 }}>
        <CategoryFilter categories={categories} onCategorySelect={handleCategorySelect} />
      </Box>
      <FormControl fullWidth sx={{ my: 2 }}>
        <InputLabel id="author-select-label">Filter by Author</InputLabel>
        <Select
          labelId="author-select-label"
          value={selectedAuthor}
          label="Filter by Author"
          onChange={handleAuthorChange}
        >
          <MenuItem value="">All Authors</MenuItem>
          {[...new Set(posts.map(post => post.fields.author.fields.name))].map(author => (
            <MenuItem key={author} value={author}>{author}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <Grid container spacing={2} sx={{ my: 2 }}>
        {filteredPosts.map(post => (
          <Grid item xs={12} md={6} key={post.sys.id}>
            <Paper elevation={3} sx={{ marginBottom: 1 }}>
             <Card component={RouterLink} to={`/post/${post.fields.slug}`} sx={{ textDecoration: 'none' }}>              
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {post.fields.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {post.fields.author.fields.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
              </Card>
</Paper>          </Grid>
        ))}
      </Grid>
      <BackButton text="Back" onClick={() => window.history.back()} />
    </Container>
  );
}

export default BlogPage;
