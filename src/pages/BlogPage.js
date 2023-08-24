import React, { useState, useEffect } from 'react';
import client from '../services/contenful';
import './BlogPage.css'; // Consider using CSS modules or styled-components for consistent styling
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import BackButton from '../components/BackButton';
import { Web3Button } from '@web3modal/react';
import { useWeb3Modal } from "@web3modal/react";

function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedAuthor, setSelectedAuthor] = useState('');
  const { account } = useWeb3Modal();
  const buttonText = account ? `${account.slice(0, 6)}...${account.slice(-4)}` : "Connect Wallet";

  // Fetching blog posts from Contentful
  useEffect(() => {
    client.getEntries({ content_type: 'pageBlogPost' })
      .then((response) => {
        const sortedPosts = response.items.sort((a, b) => new Date(b.sys.createdAt) - new Date(a.sys.createdAt));
        setPosts(sortedPosts);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching data from Contentful:", error);
        setLoading(false);
        // Consider showing a user-friendly error message here
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
