// Importing necessary libraries and components
import React, { useState, useEffect } from 'react';
import client from '../services/contenful';
import './BlogPostPage.css';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import { Link } from 'react-router-dom';

// BlogPostPage component to display individual blog posts
function BlogPostPage() {
    // Extracting post ID from the URL
    const { id } = useParams();

    // State variables for post data and loading status
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    // Fetching post data from Contentful using the provided ID
    useEffect(() => {
        client.getEntry(id)
            .then((response) => {
                setPost(response.fields);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching data from Contentful:", error);
                setLoading(false);
            });
    }, [id]);

    // Scroll to top when the post ID changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    // Custom renderer for embedded entries in rich text, specifically for images
    const options = {
        renderNode: {
            [BLOCKS.EMBEDDED_ENTRY]: (node) => {
                const { internalName, image, caption, fullWidth } = node.data.target.fields;
                const imageUrl = image.fields.file.url;
                const alt = internalName;
                return (
                    <div className={`rich-image ${fullWidth ? 'full-width' : ''}`}>
                        <img src={imageUrl} alt={alt} />
                        {caption && <p className="caption">{caption}</p>}
                    </div>
                );
            }
        }
    };

    // Display a loading message while fetching data
    if (loading) {
        return <div>Loading...</div>;
    }

    // Render the blog post content
    return (
        <>
            <Navbar />
            <div className="post-container">
                <h1 className="post-title">{post.title}</h1>
                <div className="post-author">
                    <img src={post.author.fields.avatar.fields.file.url} alt={post.author.fields.name} className="author-avatar" />
                    <span>{post.author.fields.name}</span>
                </div>
                <p className="post-date">{new Date(post.publishedDate).toLocaleDateString()}</p>
                <img src={post.featuredImage.fields.file.url} alt={post.title} className="post-image" />
                <div className="post-content">
                    {documentToReactComponents(post.content, options)}
                </div>
                {post.relatedBlogPosts && post.relatedBlogPosts.length > 0 && (
                    <div className="related-posts">
                        <h2>Related Posts</h2>
                        {post.relatedBlogPosts.map(relatedPost => (
                            <Link to={`/post/${relatedPost.sys.id}`} key={relatedPost.sys.id} className="related-post-link">
                                <div className="related-post">
                                    <h3>{relatedPost.fields.title}</h3>
                                    <p>{relatedPost.fields.shortDescription}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}

// Exporting the BlogPostPage component for use in other parts of the application
export default BlogPostPage;
