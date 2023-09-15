import React, { useState, useEffect } from 'react';
import client from '../services/contenful';
import './BlogPostPage.css';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import { Link } from 'react-router-dom';
import BackButton from '../components/BackButton';
import { useLocale } from '../components/LocaleContext';
import { Helmet } from 'react-helmet';

function BlogPostPage() {
    const { slug } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const { locale } = useLocale();
    const shareImage = post?.seoFields?.shareImages?.length > 0 
        ? post.seoFields.shareImages[0].fields.file.url 
        : post?.featuredImage?.fields?.file?.url;

    useEffect(() => {
        // Use getEntries with a query to fetch by slug
        client.getEntries({ 'fields.slug': slug, content_type: 'pageBlogPost', locale: locale })
            .then((response) => {
                if (response.items.length > 0) {
                    setPost(response.items[0].fields);
                } else {
                    console.error("No entries found for the given slug.");
                }
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching data from Contentful:", error);
                setLoading(false);
            });
    }, [slug, locale]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

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

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
        <Helmet>
            <title>{post.title} - Tech Rebel</title>
            <meta name="description" content={post.shortDescription} />
            <meta property="og:title" content={post.title} />
            <meta property="og:description" content={post.shortDescription} />
            <meta property="og:image" content={shareImage} />
            <meta property="og:url" content={`https://techrebel.com/post/${post.slug}`} /> {/* Use slug instead of id */}
            <meta name="twitter:card" content="summary_large_image" />
        </Helmet>
            <Navbar />
            <div className="post-container">
                <h1 className="post-title">{post.title}</h1>
                <div className="post-author">
                    <img src={post.author.fields.avatar.fields.file.url} alt={post.author.fields.name} className="author-avatar" />
                <Link to={`/author/${post.author.sys.id}`} className="author-name-link">
                    <span>{post.author.fields.name}</span>
                </Link>
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
                            <Link to={`/post/${relatedPost.fields.slug}`} key={relatedPost.sys.id} className="related-post-link">
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

export default BlogPostPage;

//<Link to={`/post/${post.fields.slug}`} key={post.sys.id}