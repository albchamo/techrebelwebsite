// Importing necessary libraries and components
import React, { useState, useEffect } from 'react';
import client from '../services/contenful';
import './BlogPostPage.css';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import { Link } from 'react-router-dom';
import BackButton from '../components/BackButton';
import { useLocale } from '../components/LocaleContext'; // Import the useLocale hook
import { Helmet } from 'react-helmet';

function BlogPostPage() {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const { locale } = useLocale(); // Use the locale from the context

    useEffect(() => {
        client.getEntry(id, { locale: locale }) // Include the locale parameter
            .then((response) => {
                setPost(response.fields);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching data from Contentful:", error);
                setLoading(false);
            });
    }, [id, locale]);

    // Scroll to top when the post ID changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);


// Determine which image to use for sharing
const shareImage = post && post.seoFields?.shareImages?.length > 0 
? post.seoFields.shareImages[0].fields.file.url 
: post?.featuredImage?.fields?.file?.url;


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
        {shareImage && (
            <Helmet>
                {/* Meta tags for Twitter Cards */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:image" content={shareImage} />

                {/* Meta tags for Facebook Open Graph */}
                <meta property="og:image" content={shareImage} />
                <meta property="og:image:alt" content={post?.title} />
            </Helmet>
        )}
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
                <BackButton text="Back" onClick={() => window.history.back()} />
            </div>
        </>
    );
}

// Exporting the BlogPostPage component for use in other parts of the application
export default BlogPostPage;
