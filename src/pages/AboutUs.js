import React, { useEffect, useState } from 'react';
import client from '../services/contenful';
import HeroSection from '../components/HeroSection';
import WhoWeServeSection from '../components/WhoWeServeSection';
import OurServicesSection from '../components/OurServicesSection';
import FrameworkSection from '../components/FrameworkSection';
import ValuePropsSection from '../components/ValuePropsSection';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import AuthorCard from '../components/AuthorCard';
import BackButton from '../components/BackButton';
import Navbar from '../components/Navbar';
import { useLocale } from '../components/LocaleContext';
import { Typography, Grid, Box,  Button, Container } from '@mui/material';



// Import other necessary components

const AboutUs = () => {
  const [pageContent, setPageContent] = useState(null);
  const authorNames = ['Alberto Chaves', 'Sergio Mora', 'Nazareno (Tuka) Rozas'];
  const { locale } = useLocale();


  useEffect(() => {
    // Use the Contentful client to fetch the content for the "About Us" page
    client.getEntry('5DPM3kHwaJ0hQLgOWxcuX4', { locale: locale })
      .then((entry) => {
        console.log('Contentful entry:', entry.fields); // Debugging line
        setPageContent(entry.fields);
      })
      .catch((error) => console.log('Error fetching entry:', error));
  }, [locale]); // Add locale to the dependency array

  if (!pageContent) {
    // Display a loading state until the content is fetched
    return <p>Loading...</p>;
  }

  return (
    <Container>
      <Navbar/> 

        <Typography variant="h1" sx={{ fontSize: '15vw', textAlign: 'center' }}>{pageContent.title}</Typography>
        <HeroSection content={pageContent.heroSection} />  
        <Typography variant="h3" component="h3" sx={{ fontSize: { xs: '5vh', md: '10vh' }, fontWeight: '600', textAlign: 'center' }}>
          {pageContent.whoWeServeTitle}
        </Typography>
        <WhoWeServeSection content={pageContent.whoWeServes} />
        <Typography variant="h3" component="h3" sx={{ fontSize: { xs: '5vh', md: '10vh' }, fontWeight: '600', textAlign: 'center' }}>
           {pageContent.ourServicesTitle}
        </Typography>
        <OurServicesSection content={pageContent.ourServices} />
        <Typography variant="h3" component="h3" sx={{ fontSize: { xs: '5vh', md: '10vh' }, fontWeight: '600', textAlign: 'center' }}>
           {pageContent.ourFramework}
        </Typography>
        <FrameworkSection content={pageContent.framework} />
        <Typography variant="h3" component="h3" sx={{ fontSize: { xs: '5vh', md: '10vh' }, fontWeight: '600', textAlign: 'center' }}> 
        {pageContent.whyChooseUsTitle}
        </Typography>
        <ValuePropsSection content={pageContent.valueProps} />
        <Typography variant="h3" component="h3" sx={{ fontSize: { xs: '5vh', md: '10vh' }, fontWeight: '600', textAlign: 'center' }}> 
         {pageContent.whoWeAre}
         </Typography>
         <Box sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        justifyContent: 'center',
        flexWrap: 'wrap',
        paddingBottom: '10vh'
      }}>
        {authorNames.map(name => (
          <AuthorCard key={name} authorName={name} />
        ))}
      </Box>
          <BackButton text="Back" onClick={() => window.history.back()} />
          </Container>
  );
};

export default AboutUs;

