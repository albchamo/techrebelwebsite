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
  const whyText = pageContent.whyText.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
 ));

  return (
    <Container>
      <Navbar/> 

        <HeroSection content={pageContent.heroSection} />  


        <Typography variant = 'body1' sx={{ padding: { xs: '0px 5vw', md: '0px 10vw' } }}> {whyText} </Typography>


        <Typography variant="h3" component="h3" sx={{ fontSize: { xs: '5vh', md: '10vh' }, fontWeight: '600', textAlign: 'center', pt: '10vh' }}>
          {pageContent.whoWeServeTitle}
        </Typography>
        <OurServicesSection content={pageContent.ourServices} />

        <Typography variant="h3" component="h3" sx={{ fontSize: { xs: '5vh', md: '10vh' }, fontWeight: '600', textAlign: 'center', pb: '10vh' }}> 
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

//        <Typography variant="h1" sx={{ fontSize: '15vw', textAlign: 'center' }}>{pageContent.title}</Typography>

//<Typography variant="h3" component="h3" sx={{ fontSize: { xs: '5vh', md: '10vh' }, fontWeight: '600', textAlign: 'center' }}>
 //          {pageContent.ourServicesTitle}
 //       </Typography>
//                <WhoWeServeSection content={pageContent.whoWeServes} />

//        <Typography variant="h3" component="h3" sx={{ fontSize: { xs: '5vh', md: '10vh' }, fontWeight: '600', textAlign: 'center' }}>
//           {pageContent.ourFramework}
//        </Typography>
//        <FrameworkSection content={pageContent.framework} />