// Importing required modules and components
import React, { useState, useEffect } from 'react';
import client from '../services/contenful';
import { useParams } from 'react-router-dom';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import "./AuthorBioPage.css";
import Navbar from '../components/Navbar';
import BackButton from '../components/BackButton';

// AuthorBioPage component definition
function AuthorBioPage() {
  // Using React hooks to manage state
  const { id } = useParams(); // Get the author ID from the URL
  const [author, setAuthor] = useState(null); // State to hold author data
  const [loading, setLoading] = useState(true); // State to manage loading status

  // Fetching author data from Contentful using useEffect
  useEffect(() => {
    client.getEntry(id)
      .then((response) => {
        console.log("Received data from Contentful:", response.fields);  // Debugging line
        setAuthor(response.fields); // Update the author state with fetched data
        setLoading(false); // Set loading to false
      })
      .catch((error) => {
        console.error("Error fetching data from Contentful:", error); // Log any errors
        setLoading(false); // Set loading to false
      });
  }, [id]);

  // Loading state
  if (loading) {
    return <div>Loading...</div>;
  }

  // If no author data is found
  if (!author) {
    return <div>No author data found.</div>;  // Debugging line
  }

  // Render the AuthorBioPage
  return (
    <>
      <div className="author-bio-page">
        <Navbar />  {/* Navbar component */}
        <div className="author-bio-container">
          <div className="author-container">
            <div className="author-header">
              <div className="author-avatar">
                <img src={author.avatar.fields.file.url} alt={author.name} /> {/* Author's avatar */}
              </div>
              <div className="author-name">
                <h1>{author.name}</h1> {/* Author's name */}
              </div>
            </div>
            <div className="author-bio">
              {documentToReactComponents(author.bio)} {/* Author's bio */}
            </div>
          </div>
        </div>
        <BackButton text="Back" onClick={() => window.history.back()} /> {/* Back button */}
      </div>
    </>
  );
}

// Export the AuthorBioPage component
export default AuthorBioPage;