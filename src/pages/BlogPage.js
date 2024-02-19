import React, { useState, useEffect } from 'react';
import client from '../services/contenful';
import './BlogPage.css'; // Consider using CSS modules or styled-components for consistent styling
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import BackButton from '../components/BackButton';
import { useLocale } from '../components/LocaleContext';
import CategoryFilter from '../components/CategoryFilter';




function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedAuthor, setSelectedAuthor] = useState('');
  const { locale } = useLocale();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = [ 'General', 'News', 'Research']; // Replace with your actual categories



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
    console.log("Selected Category:", category);
    setSelectedCategory(category);
  };

  //const filteredPosts = selectedAuthor ? posts.filter(post => post.fields.author.fields.name === selectedAuthor) : posts;
  let filteredPosts = posts;
  if (selectedAuthor) {
    filteredPosts = filteredPosts.filter(post => post.fields.author.fields.name === selectedAuthor);
  }
  if (selectedCategory !== 'All') {
    filteredPosts = filteredPosts.filter(post => 
      post.fields.category.some(cat => cat.fields.name === selectedCategory)
    );
    console.log("Filtered Posts:", filteredPosts); // Log the final filtered posts
  }
  return (
    <div>
      <Navbar />
      <div className="category-filter-wrapper">
    <CategoryFilter categories={categories} onCategorySelect={handleCategorySelect} />
</div>
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
          <Link to={`/post/${post.fields.slug}`} key={post.sys.id}>
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
