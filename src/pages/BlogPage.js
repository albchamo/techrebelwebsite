import React, { useState, useEffect } from 'react';
import client from '../services/contenful';
import './BlogPage.css';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar'; // Assuming you have this component
import BackButton from '../components/BackButton';

function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedAuthor, setSelectedAuthor] = useState(''); // For filtering by author

  useEffect(() => {
    client.getEntries({ content_type: 'pageBlogPost' })
      .then((response) => {
        const sortedPosts = response.items.sort((a, b) => new Date(b.sys.createdAt) - new Date(a.sys.createdAt)); // Sorting by date
        setPosts(sortedPosts);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching data from Contentful:", error);
        setLoading(false);
      });
  }, []);

  const handleAuthorChange = (event) => {
    setSelectedAuthor(event.target.value);
  };

  const filteredPosts = selectedAuthor ? posts.filter(post => post.fields.author.fields.name === selectedAuthor) : posts;

  return (
    <div>
      <Navbar />
      <div className="author-filter">
        <label>Filter by Author:</label>
        <select onChange={handleAuthorChange}>
          <option value="">All Authors</option>
          {/* Assuming each post has an author and each author has a unique name */}
          {[...new Set(posts.map(post => post.fields.author.fields.name))].map(author => (
            <option key={author} value={author}>{author}</option>
          ))}
        </select>
      </div>
      <div className="blog-container">
        {filteredPosts.map(post => (
          <Link to={`/post/${post.sys.id}`} key={post.sys.id}>
            <div className="blog-post">
              <div className="blog-title">{post.fields.title}</div>
              <div className="blog-author">{post.fields.author.fields.name}</div>
            </div>
          </Link>
        ))}
      </div>
      <BackButton text="Back" onClick={() => window.history.back()} />
    </div>
  );
}

export default BlogPage;
