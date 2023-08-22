// Importing necessary libraries and components
import React, { useState, useEffect } from 'react';
import client from '../services/contenful';
import './BlogPage.css';
import { Link } from 'react-router-dom';

// BlogPage component to display a list of blog posts
function BlogPage() {
  // State variables for posts data and loading status
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetching all blog post entries from Contentful
  useEffect(() => {
    client.getEntries({ content_type: 'pageBlogPost' })
      .then((response) => {
        setPosts(response.items);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching data from Contentful:", error);
        setLoading(false);
      });
  }, []);

  // Display a loading message while fetching data
  if (loading) {
    return <div>Loading...</div>;
  }

  // Render the list of blog posts
  return (
    <div>
      <h1>Blog Posts</h1>
      <div className="blog-container">
        {posts.map(post => (
          // Link to the detailed blog post page
          <Link to={`/post/${post.sys.id}`} key={post.sys.id}>
            <div className="blog-post">
              <div className="blog-title">{post.fields.title}</div>
              <div className="blog-description">{post.fields.shortDescription}</div>
              <div className="blog-author">{post.fields.author.fields.name}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

// Exporting the BlogPage component for use in other parts of the application
export default BlogPage;
