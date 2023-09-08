import React, { useState, useEffect } from 'react';
import client from '../services/contenful';
import { Link } from 'react-router-dom';
import './AuthorCard.css';


function AuthorCard({ authorName }) {
  const [author, setAuthor] = useState(null);

  


  useEffect(() => {
    client.getEntries({
      'content_type': 'componentAuthor', // Update this to the correct content type ID
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
    return null; // or return a loading placeholder
  }

  return (
    <Link to={`/author/${author.sys.id}`} className="author-card-link">
      <div className="author-card">
        <img src={author.fields.avatar.fields.file.url} alt={author.fields.name} />
        <h3>{author.fields.name}</h3>
      </div>
    </Link>
);

}

export default AuthorCard;
