import React, { useState, useEffect } from 'react';
import client from '../services/contenful';
import { useParams } from 'react-router-dom';
import { Container, Typography, Box, Card, CardMedia, CardContent, Grid, Link } from '@mui/material';
import Navbar from '../components/Navbar';
import BackButton from '../components/BackButton'; // Assume this is adapted to MUI
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import { Helmet } from 'react-helmet';
import { useLocale } from '../components/LocaleContext';

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
                const { file } = node.data.target.fields;
                const imageUrl = file.url;
                 return (
                    <Box sx={{ maxWidth: '100%', margin: 'auto' }}>
                        <img src={imageUrl} alt={file.title} style={{ width: '100%', height: 'auto' }} />
                    </Box>
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
            <Container>
            <Typography variant="h2" sx={{ color: '#FF6000', marginBottom: 2, fontSize: { xs: '1.5rem', md: '3rem' } }}>
                {post.title}
            </Typography>
                
            <Grid container spacing={2} alignItems="center" justifyContent="space-between">
                <Grid item xs={12} md={6} sx={{ paddingBottom: '20px'}}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <CardMedia
                        component="img"
                        image={post.author.fields.avatar.fields.file.url}
                        alt={post.author.fields.name}
                        sx={{ width: 50, height: 50, borderRadius: '50%' }}
                    />
                    <Link to={`/author/${post.author.sys.id}`} sx={{ textDecoration: 'none', color: 'inherit', ml: 1 }}>
                        <Typography variant="body1">{post.author.fields.name}</Typography>
                    </Link>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="body2" sx={{ color: '#FF6000', textAlign: { xs: 'left', md: 'right' } }}>
                        {new Date(post.publishedDate).toLocaleDateString()}
                    </Typography>
                </Grid>
                </Grid>
                
                <Card sx={{ maxWidth: '100%', boxShadow: 'none', marginBottom: 2 }}>
                <CardMedia
                    component="img"
                    image={post.featuredImage.fields.file.url}
                    alt={post.title}
                    sx={{ maxHeight: 500, width: '100%', maxWidth: '100%', margin: 'auto' }}
                    />
                </Card>
                
                <Box sx={{ my: 4 , paddingBottom: '5rem'}}>
                    {documentToReactComponents(post.content, options)}
                </Box>
                
                {/* Related Posts */}
                
                <BackButton text="Back" onClick={() => window.history.back()} sx={{ my: 4 }} />
            </Container>
        </>
    );
}

export default BlogPostPage;

//<Link to={`/post/${post.fields.slug}`} key={post.sys.id}